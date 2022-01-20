/*
  Warnings:

  - You are about to drop the column `rol` on the `Rol` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Rol` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Rol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `about` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `showImage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- DropIndex
DROP INDEX "Rol_rol_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Rol" DROP COLUMN "rol",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "education" JSONB[],
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "experience" JSONB[],
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "languages" JSONB[],
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "postulation" INTEGER[],
ADD COLUMN     "roleId" INTEGER NOT NULL,
ADD COLUMN     "showImage" BOOLEAN NOT NULL,
ADD COLUMN     "skillTags" TEXT[];

-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "legalName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "stin" TEXT NOT NULL,
    "accountManagers" TEXT[],
    "image" TEXT NOT NULL,
    "posts" INTEGER[],
    "companyValues" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "vission" TEXT NOT NULL,
    "reviews" JSONB[],

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "contractType" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "tags" TEXT[],
    "applicants" INTEGER[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_name_key" ON "Rol"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
