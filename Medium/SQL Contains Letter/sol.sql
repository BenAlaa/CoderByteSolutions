/* write your SQL query below */

-- SELECT * FROM maintable_C246A

SELECT COUNT(*)
FROM maintable_C246A
WHERE FirstName LIKE '%e%'
AND LENGTH(LASTNAME) > 5;


















/* write your SQL query below */

SELECT COUNT(*) 
FROM maintable_W4TDP
WHERE FirstName LIKE '%e%'
  AND LENGTH(LastName) > 5



















  /* write your SQL query below */

SELECT count(*) FROM maintable_W6D9K
where FirstName like '%e%' and CHAR_LENGTH(LastName) > 5;


















/* write your SQL query below */

SELECT COUNT(*)  
FROM maintable_0YVM3
WHERE FirstName Like "%e%" AND LENGTH(LastName) > 5