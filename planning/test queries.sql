
INSERT INTO AIRPLANE (Tail_no,Plane_type,Flight_hours,Company,MaxTOWeight,MaxLandWeight,Capacity,MaxCargoWeight)
       VALUES ("777-0001","777-200",100,"United",545000,445000,301,297300)
       ON DUPLICATE KEY UPDATE
						  Plane_type="777-200",
                          Flight_hours=100,
                          Company="United",
                          MaxTOWeight=545000,
                          MaxLandWeight=445000,
                          Capacity=280,
                          MaxCargoWeight=297300;

SELECT * FROM AIRPLANE;*/
select * from AIRPORT;