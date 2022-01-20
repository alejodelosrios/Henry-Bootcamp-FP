/*
  Warnings:

  - You are about to drop the `_PostToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_B_fkey";

-- DropTable
DROP TABLE "_PostToUser";

-- CreateTable
CREATE TABLE "__UserToPostulations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "__UserToFavourites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__UserToPostulations_AB_unique" ON "__UserToPostulations"("A", "B");

-- CreateIndex
CREATE INDEX "__UserToPostulations_B_index" ON "__UserToPostulations"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__UserToFavourites_AB_unique" ON "__UserToFavourites"("A", "B");

-- CreateIndex
CREATE INDEX "__UserToFavourites_B_index" ON "__UserToFavourites"("B");

-- AddForeignKey
ALTER TABLE "__UserToPostulations" ADD FOREIGN KEY ("A") REFERENCES "Post"("postId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__UserToPostulations" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__UserToFavourites" ADD FOREIGN KEY ("A") REFERENCES "Post"("postId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__UserToFavourites" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
