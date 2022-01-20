/*
  Warnings:

  - You are about to drop the column `posts` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Post` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "posts";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "company",
ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
