/*
  Warnings:

  - You are about to drop the column `postulation` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "postulation",
ADD COLUMN     "postulations" INTEGER[];
