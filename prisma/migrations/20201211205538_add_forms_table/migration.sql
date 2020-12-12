-- CreateTable
CREATE TABLE "Form" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "project_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Form.name_project_id_unique" ON "Form"("name", "project_id");

-- AddForeignKey
ALTER TABLE "Form" ADD FOREIGN KEY("project_id")REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
