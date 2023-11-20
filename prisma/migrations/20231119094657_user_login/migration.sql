-- CreateTable
CREATE TABLE `AdditionalInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `preferred_communication_method` VARCHAR(191) NULL,
    `emergency_contact_name` VARCHAR(191) NULL,
    `emergency_contact_relationship` VARCHAR(191) NULL,
    `emergency_contact_phone` VARCHAR(191) NULL,
    `how_did_you_hear_about_us` VARCHAR(191) NULL,
    `authorization_and_consent` BOOLEAN NOT NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `AdditionalInformation_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attachments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `document_name` VARCHAR(191) NULL,
    `document_url` VARCHAR(191) NULL,

    INDEX `Attachments_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nature_of_legal_issue` VARCHAR(191) NOT NULL,
    `date_of_incident` DATETIME(3) NULL,
    `case_number` VARCHAR(191) NULL,
    `opposing_parties` VARCHAR(191) NULL,
    `current_attorney` VARCHAR(191) NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `CaseDetails_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ElectronicSignature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `signature_image_url` VARCHAR(191) NULL,
    `signature_date` DATETIME(3) NULL,

    INDEX `ElectronicSignature_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FamilyPersonalHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marital_status` VARCHAR(191) NULL,
    `dependents` INTEGER NULL,
    `health_information` VARCHAR(191) NULL,
    `child_custody_support_info` VARCHAR(191) NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `FamilyPersonalHistory_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FinancialInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `current_employer` VARCHAR(191) NULL,
    `job_title` VARCHAR(191) NULL,
    `income` DOUBLE NULL,
    `monthly_expenses` DOUBLE NULL,
    `debts` DOUBLE NULL,
    `assets` VARCHAR(191) NULL,
    `liabilities` VARCHAR(191) NULL,
    `bankruptcy_history` BOOLEAN NOT NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `FinancialInformation_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LegalHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `criminal_history` VARCHAR(191) NULL,
    `civil_litigation_history` VARCHAR(191) NULL,
    `legal_restrictions_or_probation` VARCHAR(191) NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `LegalHistory_client_id_fkey`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonalInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email_address` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NULL,
    `social_security_number` VARCHAR(191) NULL,
    `preferred_pronouns` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLogin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email_address` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserLogin_email_address_key`(`email_address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdditionalInformation` ADD CONSTRAINT `AdditionalInformation_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attachments` ADD CONSTRAINT `Attachments_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseDetails` ADD CONSTRAINT `CaseDetails_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ElectronicSignature` ADD CONSTRAINT `ElectronicSignature_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FamilyPersonalHistory` ADD CONSTRAINT `FamilyPersonalHistory_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinancialInformation` ADD CONSTRAINT `FinancialInformation_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LegalHistory` ADD CONSTRAINT `LegalHistory_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `PersonalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
