/*
  Warnings:

  - You are about to drop the column `bulletinUrl` on the `Candidature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Candidature" DROP COLUMN "bulletinUrl",
ADD COLUMN     "bulletinUrls" TEXT[];
