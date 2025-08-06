/*
  Warnings:

  - Changed the type of `priority` on the `FormSubmission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `domain` on the `FormSubmission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."FormSubmission" DROP COLUMN "priority",
ADD COLUMN     "priority" TEXT NOT NULL,
DROP COLUMN "domain",
ADD COLUMN     "domain" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."Domain";

-- DropEnum
DROP TYPE "public"."Priority";
