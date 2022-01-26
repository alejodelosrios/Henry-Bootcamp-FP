/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ApplicantToTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ApplicantToTags" DROP CONSTRAINT "_ApplicantToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToTags" DROP CONSTRAINT "_ApplicantToTags_B_fkey";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "_ApplicantToTags";

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ApplicantToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicantToTag_AB_unique" ON "_ApplicantToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicantToTag_B_index" ON "_ApplicantToTag"("B");

-- AddForeignKey
ALTER TABLE "_ApplicantToTag" ADD FOREIGN KEY ("A") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicantToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
