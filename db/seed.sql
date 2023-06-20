USE employee_db;


INSERT INTO department (`name`) VALUES 
("HR"),
("Millworks"),
("Garden");

INSERT INTO role (`title`, `salary`, `department_id`)
VALUES ("HR MAnager", 45000, 1),
        ("HR Assistant", 25, 1),
        ("Millworks Manager", 100000, 2),
        ("Millworks Assistant", 45000, 2),
        ("Garden Manager", 100000, 3),
        ("Garden Assistant", 45000, 3);

INSERT INTO employee (`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("James", "Johnson", 1, NULL),
        ("Tony", "Tiger", 2, 1),
        ("Seth", "Green", 3, NULL),
        ("Jason", "Statham", 4, 3),
        ("Charlise", "Theron", 5, NULL),
        ("Mark", "Wahlberg", 6, 5);

