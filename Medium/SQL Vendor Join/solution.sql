/* write your SQL query below */

SELECT A.GroupID,  CompanyName , Count(A.GroupID) Count
FROM maintable_F49NR A LEFT JOIN cb_vendorinformation B 
ON A.GroupID = B.GroupID
GROUP BY 1,2
ORDER BY Count(A.GroupID)






















/* write your SQL query below */

SELECT m.GroupId, c.CompanyName, count(*) as count FROM maintable_SXKG2 m
join cb_vendorinformation c on c.GroupID = m.GroupID
group by CompanyName
order by count, GroupID ASC













/* write your SQL query below */

SELECT 
a.GroupID, 
b.CompanyName,
Count(*) as Count

FROM maintable_I7HAW a
LEFT JOIN cb_vendorinformation b 
on a.GroupID = b.GroupID

group by a.GroupID, b.CompanyName
order by Count