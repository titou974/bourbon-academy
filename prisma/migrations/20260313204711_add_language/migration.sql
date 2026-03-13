/*
  Warnings:

  - Added the required column `langue` to the `Candidature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidature" ADD COLUMN     "langue" TEXT NOT NULL;
