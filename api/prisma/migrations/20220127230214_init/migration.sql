/*
  Warnings:

  - You are about to drop the column `viewed` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the `__UserToPostulations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "__UserToPostulations" DROP CONSTRAINT "__UserToPostulations_A_fkey";

-- DropForeignKey
ALTER TABLE "__UserToPostulations" DROP CONSTRAINT "__UserToPostulations_B_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "viewed";

-- DropTable
DROP TABLE "__UserToPostulations";

-- CreateTable
CREATE TABLE "ApplicantPool" (
    "id" SERIAL NOT NULL,
    "applicantId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "ApplicantPool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ApplicantPool" ADD CONSTRAINT "ApplicantPool_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantPool" ADD CONSTRAINT "ApplicantPool_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
