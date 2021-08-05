/* write your SQL query below */

SELECT ReportsTo, count(ReportsTo) as Members,
 round(avg(Age), 0) as 'Average Age' 
 FROM t_lhv9soi459ev

Where ReportsTo is not null

Group by ReportsTo

order by ReportsTo














SELECT
  reportsTo as ReportsTo,
  COUNT(ID) as Members,
  CEIL(AVG(Age)) as 'Average Age'
FROM t_3gj7vwvaomlc
WHERE reportsTo IS NOT NULL
GROUP BY reportsTo















/* write your SQL query below */

SELECT s.ReportsTo,
COUNT(*) AS Members,
ROUND(AVG(s.Age), 0) AS `Average Age` FROM (
  SELECT * FROM t_tcger096cnyu
  WHERE ReportsTo IS NOT NULL
) s
GROUP BY s.ReportsTo
ORDER BY s.ReportsTo ASC














SELECT ReportsTo,COUNT(FirstName) as Members,ROUND(AVG(Age)) as "Average Age" FROM t_9x84bmyy2zvi WHERE ReportsTo IS NOT NULL GROUP BY ReportsTo













/* write your SQL query below */

SELECT ReportsTo,
COUNT(FirstName) AS Members,
ROUND(AVG(Age), 0) AS 'Average Age'
FROM t_bmzvt3kcyzuw
WHERE ReportsTo IS NOT NULL
GROUP BY ReportsTo;