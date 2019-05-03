/*SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO FLIGHTS (Flight_no,Tail_no,Origin,Dest,TO_Time,Land_Time,Seats)
	VALUES ("UA-111","787-0001","BWI","BOS",'10:00','12:00',280);*/
update FLIGHTS set Seats=Seats-1 where Flight_no="UA-111";
select * from FLIGHTS;