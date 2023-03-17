USE `business`;

-- Revisar employee
SELECT * FROM employee;

-- ALIAS
SELECT last_name AS 'Apellido' FROM employee;

-- ALIAS ++
SELECT
	employee_id AS 'ID',
    first_name AS 'Nombre',
    last_name AS 'Apellido',
    department AS 'Departamento'
FROM employee;

-- Filtrar por nombre
-- BUSCAR a Monika

SELECT first_name FROM employee
WHERE first_name = 'Monika';

-- Filtrar doble
SELECT * FROM employee
WHERE salary = 500000 AND first_name = 'Vivek';

-- Filtrar por NOT
SELECT * FROM employee
WHERE NOT first_name = 'Barrack';

-- Filtrar por doble negacion
SELECT * FROM employee
WHERE NOT first_name = 'Santiago' AND NOT first_name = 'Ian';

-- Ordenamiento
-- ORDER BY
-- Default es orden descendiente
SELECT * FROM employee
ORDER BY department ASC, last_name DESC;

-- GROUP BY
SELECT * FROM employee
GROUP BY salary;

-- IN
SELECT * FROM employee
WHERE employee_id IN (1, 3, 7, 8, 5);

-- BETWEEN 
SELECT * FROM employee
WHERE salary NOT BETWEEN 200000 AND 500000;

-- LIMIT 
SELECT * FROM employee
LIMIT 5;

-- LIMIT + OFFSET
SELECT * FROM employee
LIMIT 3 OFFSET 3;

-- LIKE
SELECT * FROM employee
WHERE last_name LIKE 'B%';

SELECT * FROM employee
WHERE last_name LIKE '%A';

-- CASE SENSITIVE
SELECT * FROM employee
WHERE last_name LIKE BINARY '%a';

-- LIKE ++
SELECT * FROM employee
WHERE join_date LIKE '2014-02%';

-- UPDATE
UPDATE employee
	SET salary = 300000
WHERE employee_id = 5;

-- Insertar EMPLEADOS a tabla employee
INSERT INTO `employee`
(employee_id, first_name, last_name, salary, join_date, department)
VALUES
(9, 'Oscar', 'Kang', 1000000000, '2023-03-17', '7up'),
(10, 'Daniel', 'Morales', 1000000000, '2023-03-17', 'Dueña'),
(11, 'Uriel', 'Perez', 1000000000, '2023-03-17', 'Accionista'),
(12, 'Lizzet', 'Garcia', 1000000000, '2023-03-17', 'Lizenciade'),
(13, 'Mariana', 'Madariaga', 1000000000, '2023-03-17', 'KUKUI'),
(14, 'Hector', 'Meneses', 1000000000, '2023-03-17', 'My Little Pony');

-- UPDATE OBAMA 
UPDATE employee
	SET salary = 403000
WHERE employee_id = 7;

-- UPDATE OBAMA 
UPDATE employee
SET department = 'Cuidado de Gallinas'
WHERE employee_id = 7;

-- Insertar EMPLEADOS a tabla employee
INSERT INTO `employee`
(employee_id, first_name, last_name, salary, join_date, department)
VALUES
(15, 'Andres', 'Manuel', 403001, '2018-03-20', 'Dueña de Morena');