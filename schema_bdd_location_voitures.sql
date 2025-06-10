
-- Création de la table Agence
CREATE TABLE Agence (
    id_agence INT PRIMARY KEY,
    nom VARCHAR(100),
    adresse VARCHAR(255),
    ville VARCHAR(100),
    telephone VARCHAR(20),
    email VARCHAR(100)
);

-- Création de la table Voiture
CREATE TABLE Voiture (
    id_voiture INT PRIMARY KEY,
    id_agence INT,
    categorie_vehicule VARCHAR(50),
    tarif DECIMAL(10,2),
    disponibilite BOOLEAN,
    FOREIGN KEY (id_agence) REFERENCES Agence(id_agence)
);

-- Création de la table Utilisateur
CREATE TABLE Utilisateur (
    id_utilisateur INT PRIMARY KEY,
    email VARCHAR(100),
    prenom VARCHAR(50),
    nom VARCHAR(50),
    mot_de_passe VARCHAR(255),
    telephone VARCHAR(20),
    date_inscription DATE
);

-- Création de la table Réservation
CREATE TABLE Reservation (
    id_reservation INT PRIMARY KEY,
    date_debut DATE,
    date_fin DATE,
    id_voiture INT,
    id_utilisateur INT,
    statut VARCHAR(50),
    montant_total DECIMAL(10,2),
    moyen_paiement VARCHAR(50),
    id_agence_depart INT,
    id_agence_arrivee INT,
    FOREIGN KEY (id_voiture) REFERENCES Voiture(id_voiture),
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
    FOREIGN KEY (id_agence_depart) REFERENCES Agence(id_agence),
    FOREIGN KEY (id_agence_arrivee) REFERENCES Agence(id_agence)
);

-- Création de la table Conversation
CREATE TABLE Conversation (
    id_conversation INT PRIMARY KEY,
    id_utilisateur INT,
    date_creation TIMESTAMP,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
);

-- Création de la table Message
CREATE TABLE Message (
    id_message INT PRIMARY KEY,
    id_utilisateur INT,
    id_conversation INT,
    contenu TEXT,
    date_creation TIMESTAMP,
    role VARCHAR(50),
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
    FOREIGN KEY (id_conversation) REFERENCES Conversation(id_conversation)
);
