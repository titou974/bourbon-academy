-- CreateTable
CREATE TABLE "Candidature" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "filiere" TEXT NOT NULL,
    "message" TEXT,
    "bulletinUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Candidature_pkey" PRIMARY KEY ("id")
);
