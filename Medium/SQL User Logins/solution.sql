/* write your SQL query below */

SELECT MONTHNAME(DateJoined) as 'Month', 
 (SELECT COUNT(*) FROM maintable_DQORA a where MONTHNAME(a.DateJoined) = MONTHNAME(Main.DateJoined))
  - 
  (SELECT COUNT(*) FROM maintable_DQORA a WHERE MONTHNAME(a.DateJoined) = MONTHNAME(DATE_ADD(Main.DateJoined, interval -1 Month)))
  as 'MonthToMonthChange'
 FROM maintable_DQORA Main
 where month(DateJoined) != 1
group by  month(DateJoined)




















/* write your SQL query below */

SELECT MONTHNAME(main.Datejoined) AS Month
, ((SELECT COUNT(*) FROM maintable_M0XWZ a WHERE MONTHNAME(a.Datejoined) = MONTHNAME(main.Datejoined))
-
(SELECT COUNT(*) FROM maintable_M0XWZ a WHERE MONTHNAME(a.Datejoined) = MONTHNAME(DATE_ADD(main.Datejoined, Interval -1 Month)))) AS MonthToMonthChange

FROM maintable_M0XWZ main

WHERE MONTH(main.Datejoined) <> (SELECT MIN(MONTH(Datejoined)) FROM maintable_M0XWZ)

GROUP BY MONTH(main.Datejoined)























/* write your SQL query below */

select 
se1.month1 'MONTH'
,se1.prev2 'MonthToMonthChange'

from (
SELECT
date_format(t1.DateJoined, '%M') as month1
 ,count(t1.ID) as id_count
 , t1.DateJoined
, (select count(t2.ID) as prev_count  FROM maintable_LHPR2 t2
      where  date_format(t2.DateJoined, '%m')=date_format(DATE_ADD(t1.DateJoined,INTERVAL -1 MONTH), '%m')
      group by date_format(t2.DateJoined, '%m')
    ) as prev1
, date_format(DATE_ADD(t1.DateJoined,INTERVAL -1 MONTH),'%m') as prevdate
, count(t1.ID) - (select count(t2.ID) as prev_count  FROM maintable_LHPR2 t2
      where  date_format(t2.DateJoined, '%m')=date_format(DATE_ADD(t1.DateJoined,INTERVAL -1 MONTH), '%m')
      group by date_format(t2.DateJoined, '%m')
    ) as prev2
 FROM maintable_LHPR2 t1
group by month1
order by date_format(t1.DateJoined, '%m') desc
limit 4
) as se1

 order by date_format(se1.DateJoined, '%m') asc
;























/* write your SQL query below */
SELECT
MONTHNAME(STR_TO_DATE(Month2,'%m')) as Month,
MonthCount2 - MonthCount1 as MonthToMonthChange
FROM
(SELECT MONTH(DateJoined) AS Month1, count(1) as MonthCount1
FROM maintable_TLLHF GROUP BY Month1) AS t1
LEFT JOIN 
(SELECT MONTH(DateJoined) AS Month2, count(1) as MonthCount2
FROM maintable_TLLHF GROUP BY Month2) AS t2
ON
t1.Month1+1 = t2.Month2
limit 4
