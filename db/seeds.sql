INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  
  ( 'Walter', 'White', 0, NULL),
  ( 'Ronald', 'Firbank', 3, 1),
  ( 'Rick', 'Astley', 2, 2),
  ( 'Tony', 'Soprano', 1, 3);

  INSERT INTO department (name)
  VALUES 
  
  ('Sales'),
    ('Engineering'),
    ('Service'),
    ('Legal'),
    ('Administration');


  INSERT INTO role ( title, salary, department_id)
  VALUES 
  
  ( 'Lawyer', 100000.00, 0),
  ( 'Engineer', 80000.00, 1),
  ( 'Client Relations', 80000.00, 2),
  ( 'Distribution', 50000.00, 3);



