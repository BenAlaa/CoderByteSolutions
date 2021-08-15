/* write your SQL query below */

SELECT FirstName, LastName, ReportsTo, Position, Age,

CASE Position
WHEN 'Assistant' THEN 'CEO'
WHEN 'Director' THEN 'CEO'
ELSE 'None'
END AS 'Boss Title'


FROM maintable_HOBEH

WHERE ReportsTo = 'Jenny Richards' or ReportsTo IS NULL

ORDER BY Age



























/* write your SQL query below */

SELECT FirstName,LastName,ReportsTo,Position,Age,
case reportsto when 'Jenny Richards' then 'CEO' else 'None' end "Boss Title" 
FROM maintable_3CTUV v
where reportsto='Jenny Richards' or reportsto is null
order by age



























SELECT 
  t1.FirstName, t1.LastName, t1.ReportsTo, t1.Position, t1.Age, 
  IFNULL(t2.Position, 'None') 'Boss Title' 
FROM 
  maintable_89T1J t1 LEFT JOIN (
    SELECT 
      CONCAT(FirstName, ' ', LastName) 'FullName', Position
    FROM 
      maintable_89T1J
  ) t2
ON 
  t1.ReportsTo = t2.FullName
WHERE 
  ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY 
  Age;




















  /* write your SQL query below */

SELECT 
  FirstName, LastName, ReportsTo, Position, Age,  
  CASE
    WHEN ReportsTo IS NULL THEN "None"
    ELSE "CEO"
  END AS "Boss Title"
FROM maintable_TEJPA
WHERE ReportsTo = "Jenny Richards" OR ReportsTo IS NULL
ORDER BY Age ASC





























/* write your SQL query below */

SELECT  
FirstName, LastName, ReportsTo,
Position, Age, 
case when ReportsTo='Jenny Richards' then 'CEO' else 'None' end
as 'Boss Title'
FROM maintable_T863N
where ReportsTo='Jenny Richards' or ReportsTo is null
order by age

























/* write your SQL query below */

SELECT
  t1.firstname,
  t1.lastname,
  t1.reportsto,
  t1.position,
  t1.age,
  case when t1.position = 'Intern' or t1.position = 'CEO' then 'None'
      when t1.position = 'Assistant' or t1.position = 'Director' then 'CEO'
  end as 'Boss Title'
FROM maintable_3HPKO t1
where t1.reportsto = 'Jenny Richards' or t1.reportsto is null
order by age