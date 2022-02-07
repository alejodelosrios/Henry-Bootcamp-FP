const cron = require('node-cron');
import { prisma } from "./prisma/database";
import {transporter} from "./config/mailer";

cron.schedule('* * * * *', async function() {
    try {
      const date = new Date() // "2022-02-07T18:20:07.570Z"
      const datePlusOneDay = new Date(new Date().getTime()+(24*60*60*1000))

      const post = await prisma.post.findFirst({
          where: {
              endDate: {gte:date,lt: datePlusOneDay},
              notifiedEndDate: false
          },
          include: {
              applicants: {
                  include: {
                      applicant: true
                  }
              },
              company: {
                include: {
                  notifications: true
                }
              }
          }
      })

      if(post){
        const notifyCompany = await prisma.notification.create({
          data: {
            type: "application",
            message: `Tu publicación para la oferta de ${post && post.title} vencera en menos de 24hs`,
            postId: Number(post && post.id),
            companyId: post && post.companyId,
          },
        });
  
        const updatePost = await prisma.post.update({
          where: {
            id: post && post.id
          },
          data: {
            notifiedEndDate: true
          }
        })
        
        
        const user = await prisma.user.findFirst({
          where: {
              id: post && post.company.userId
          }
        })
  
        let emailCompany = await transporter.sendMail({
          from: '"Transforma" <transformapage@gmail.com>',
          to: `${user && user.email}`,
          subject: `${post && post.company.name}`,
          html: `<p>Tu publicación para la oferta de ${post && post.title} vencera en menos de 24hs</p>`,
        });
      }

      console.log(post)
    } catch(error){
      console.log(error)
    }
  });