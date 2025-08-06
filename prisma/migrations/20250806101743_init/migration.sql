-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "public"."Domain" AS ENUM ('WEB_DEVELOPMENT', 'FLUTTER', 'AI_ML', 'CLOUD', 'BLOCKCHAIN', 'ANDROID', 'OUTREACH', 'UI_UX');

-- CreateTable
CREATE TABLE "public"."FormSubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "reg" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "priority" "public"."Priority" NOT NULL,
    "reason" TEXT NOT NULL,
    "domain" "public"."Domain" NOT NULL,
    "bestProject" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_email_key" ON "public"."FormSubmission"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_reg_key" ON "public"."FormSubmission"("reg");
