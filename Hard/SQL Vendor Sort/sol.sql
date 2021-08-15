/* write your SQL query below */

SELECT 
  ma.GroupID as GroupID,
  FirstName,
  LastName,
  Job,
  ExternalID,
  CompanyName,
  Count(*) as "Count"
 FROM maintable_9LBU9 ma JOIN
  cb_vendorinformation cb ON ma.groupid = cb.groupid
 GROUP BY 2
 ORDER BY 7 ASC























 /* write your SQL query below */

SELECT c.GroupID, FirstName, LastName, Job, ExternalID, CompanyName,  count(*) as Count FROM maintable_OHSP5 m
inner join cb_vendorinformation c on c.GroupID=m.GroupID
group by FirstName
order by Count asc,CompanyName


























/* write your SQL query below */

SELECT m.GroupID
, FirstName, LastName, Job, ExternalID, CompanyName 
, COUNT(FirstName) as Count

FROM maintable_8HX4E m inner join 
cb_vendorinformation v on m.GroupID=v.GroupID 
group by FirstName 
order by Count(FirstName), CompanyName























/* write your SQL query below */

SELECT maintable_ZABAT.GroupID, FirstName, LastName, Job, ExternalID, CompanyName, COUNT(FirstName) AS 'Count'

FROM maintable_ZABAT JOIN cb_vendorinformation ON cb_vendorinformation.GroupID=maintable_ZABAT.GroupID

GROUP BY FirstName

ORDER BY Count ASC































/* write your SQL query below */

SELECT 
  cb_vendorinformation.GroupID,
  maintable_GVN1V.FirstName,
  maintable_GVN1V.LastName,
  maintable_GVN1V.Job,
  maintable_GVN1V.ExternalID,
  cb_vendorinformation.CompanyName,
  COUNT(*) Count
FROM maintable_GVN1V
INNER JOIN cb_vendorinformation
  ON maintable_GVN1V.GroupID = cb_vendorinformation.GroupID
GROUP BY FirstName
ORDER BY Count ASC