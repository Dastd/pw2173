divide(2,6). 						 		%HECHO 1
divide(2,4).								%HECHO 2
divide(2,12).								%HECHO 3 
divide(3,6).								%HECHO 4
divide(3,12).								%HECHO 5
divide(6,X) no es cebra.
divide(6,X) :- divide(2,X), divide(3,X).	%REGLA 1
