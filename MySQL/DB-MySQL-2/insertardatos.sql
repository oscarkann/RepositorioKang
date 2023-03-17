ALTER TABLE pets
MODIFY idpets INT NOT NULL
AUTO_INCREMENT;

-- Selecciona todo de una tabla
SELECT * FROM `users`;

-- Seleccionar solo una columna
SELECT `first_name` FROM `users`;

-- Insertar datos a tabla pets
INSERT INTO `pets`
(first_name, fav_food, `type`, users_idusers)
VALUES
('Mica', 'Atun', 'Gato', 1),
('Jindori', 'Carne de Res', 'Perro', 1),
('Link', 'Zanahorias', 'Conejo', 3),
('Beatle', 'Salmon', 'Perro', 2);

-- Seleccionar todo de pets
SELECT * FROM `pets`;

-- Filtrar por FK para identificar a owners
SELECT * FROM `pets`
WHERE users_idusers = 3;

-- Insertar datos a tabla users
INSERT INTO users
(idusers, first_name, last_name, fav_food)
VALUES
(4, 'Daniel', 'Morales', 'Ensalada de Pollo'),
(5, 'Uriel', 'Perez', 'Mole Poblano'),
(6, 'Mariana', 'Madariaga', 'Caldo Tlalpeño'),
(7, 'Lizzet', 'Garcia', 'Cheetos'),
(8, 'Hector', 'Meneses', 'Entomatadas');

-- Insertar datos a tabla pets de mis amixes de 7up
INSERT INTO `pets`
(first_name, fav_food, `type`, users_idusers)
VALUES
('Kranky', 'Higado con Croqueta', 'Perro', 5),
('Moka', 'Todo', 'Gato', 4),
('Daemon', 'Croquetas', 'Perro', 8),
('Garfio', 'Pollito', 'Perro', 6),
('Cheetos', 'LaSagna', 'Gato', 7);
