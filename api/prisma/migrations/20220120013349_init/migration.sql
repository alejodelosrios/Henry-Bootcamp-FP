/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - The `location` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tittle` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_A_fkey";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "postId" SERIAL NOT NULL,
ADD COLUMN     "startDate" TEXT NOT NULL,
ADD COLUMN     "tittle" TEXT NOT NULL,
DROP COLUMN "location",
ADD COLUMN     "location" JSONB[],
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("postId");

-- AddForeignKey
ALTER TABLE "_PostToUser" ADD FOREIGN KEY ("A") REFERENCES "Post"("postId") ON DELETE CASCADE ON UPDATE CASCADE;
