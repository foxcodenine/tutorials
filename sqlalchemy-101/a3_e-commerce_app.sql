-- adding data to tables

insert into customers (first_name, last_name, username, email, address, town) 
Values
    ('Chris', 'Farrugia', 'foxcodenine', 'chris12aug@yahoo.com', 
    'St Edward str', 'Birzebbugia'),
    ('Dorothy', 'Cassar', 'horselover', 'unscrembleyourself@gmail.com', 
    'Warda 61', 'Qormi'), 
    ('Claire', 'Bartolo', 'catgirl', 'claire@gmail.com', '72 Vally rd', 'Mosta');
    
update customers set address='Warda Triq il-Poezija' where id=2;



insert into items (name, cost_price, selling_price, quantity) Values
    ('sleeves', 0.2, 0.5, 50),
    ('cd', 1, 1.75, 25),
    ('dvd', 0.5, 2, 12),
    ('pendrive', 3, 10, 10),
    ('marker', 0.5, 1.75, 20);


-- Chris order :

insert into orders(customer_id)values(1);


insert into order_lines (order_id, item_id, quantity) values
    (1, 1, 3), (1, 2, 5), (1, 3, 10);

insert into order_lines (order_id, item_id, quantity) values
    (1, 1, 1);

-- end order 


-- viewing Chris order:
select 
    concat(customers.first_name, ' ', customers.last_name) as 'fullname', 
    items.name, 
    order_lines.quantity*items.selling_price as 'total'
from customers
    inner join orders on customers.id = orders.customer_id
    inner join order_lines on orders.id = order_lines.order_id
    inner join items on order_lines.item_id = items.id;


-- refining selection
select 
    concat(customers.first_name, ' ', customers.last_name) as 'fullname', 
    items.name, 
    sum(order_lines.quantity*items.selling_price) as 'total'
from customers
    inner join orders on customers.id = orders.customer_id
    inner join order_lines on orders.id = order_lines.order_id
    inner join items on order_lines.item_id = items.id
group by items.id;


-- trying constrain on order_lines 

INSERT INTO orders (customer_id) VALUES(2);

INSERT INTO order_lines (order_id, item_id, quantity) values (2, 1, 0);
