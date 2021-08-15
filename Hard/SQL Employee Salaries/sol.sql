/* write your SQL query below */

SELECT 
a.ID,
a.Name,
b.DivisionName,
coalesce(c.Name, c.ID) as ManagerName,
a.Salary
FROM maintable_H4W4D a
left join cb_companydivisions b on a.DivisionID=b.ID
left join maintable_H4W4D c on a.ManagerID=c.id
order by salary desc
limit 2,1






















/* write your SQL query below */

select a.ID, a.Name, d.DivisionName as DivisionName, b.Name as ManagerName, a.Salary
from maintable_3AR26 a
left join cb_companydivisions d on d.ID = a.DivisionID
left join maintable_3AR26 b on b.ID = a.ManagerID
order by a.Salary desc limit 2,1






















/* write your SQL query below */


SELECT m1.id as ID, m1.name as Name, c.DivisionName as DivisionName,
m2.name as ManagerName, m1.salary as Salary
FROM maintable_DDUNA as m1 
left join cb_companydivisions as c on m1.divisionid = c.id
left join maintable_DDUNA as m2
on m1.managerid = m2.id
order by m1.salary desc
limit 2, 1


# select * from cb_companydivisions

















/* write your SQL query below */

SELECT 
  AA.ID, AA.Name, BB.DivisionName, CC.Name "ManagerName", AA.Salary
FROM (
SELECT *
FROM maintable_2WNIE
ORDER BY Salary DESC
LIMIT 3
) AA JOIN cb_companydivisions BB
ON  BB.ID = AA.DivisionID
JOIN maintable_2WNIE CC
ON CC.ID = AA.ManagerID
ORDER BY Salary ASC
LIMIT 1