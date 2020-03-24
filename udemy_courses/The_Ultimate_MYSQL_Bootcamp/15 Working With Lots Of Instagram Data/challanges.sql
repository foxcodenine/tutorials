-- 1. Finding 5 oldest users:
SELECT * FROM users ORDER BY  created_at ASC LIMIT 5;

-- 2. What day of the week do most users register on?



SELECT 
    DAYNAME(created_at) AS 'day',
    COUNT(*) AS 'total'
FROM users 
GROUP BY DAYNAME(created_at) 
ORDER BY 
    COUNT(*) DESC, 
    DAYOFWEEK(created_at);

