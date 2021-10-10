`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 10/09/2021 02:56:54 PM
// Design Name: 
// Module Name: sevenSeg
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module sevenSeg(
    input clock,
    input senseA,
    input senseB,
    output input1,
    output input2,
    output input3,
    output input4,
    output a, b, c, d, e, f, g, dp, //the individual LED output for the seven segment along with the digital point
    output [3:0] anSS
    );
    
    localparam N = 16;
    reg [N:0] countSS;
    reg [1:0] sseg;
    reg [3:0] anSS_temp;
    reg [6:0] sseg_temp;
    reg input1reg;
    reg input2reg;
    reg input3reg;
    reg input4reg;
    
    always @ (posedge clock)
 begin
   countSS <= countSS + 1;
 end
 
 always @ (*)
 begin
  case(countSS[N:N-1]) //using only the 2 MSB's of the counter 
   
   2'b00 :  //When the 2 MSB's are 00 enable the fourth display
    begin
    if(input1reg == 1)
     sseg = 2'b1;
     else if(input2reg == 1)
     sseg = 2'b10;
     else
     sseg = 2'b0;
     anSS_temp = 4'b1110;
    end
   
   2'b01:  //When the 2 MSB's are 01 enable the third display
    begin
     if(input4reg == 1)
     sseg = 2'b1;
     else if(input3reg == 1)
     sseg = 2'b10;
     else
     sseg = 2'b0;
     anSS_temp = 4'b1101;
    end
   
   2'b10:  //When the 2 MSB's are 10 enable the second display
    begin
     if(senseA == 1)
     sseg = 2'b11; 
     else
     sseg = 0;
     anSS_temp = 4'b1011;
    end
    
   2'b11:  //When the 2 MSB's are 11 enable the first display
    begin
     if(senseB == 1)
     sseg = 2'b11; 
     else
     sseg = 0;
     anSS_temp = 4'b0111;
    end
  endcase
 end

always @ (*)
 begin
  case(sseg)
  2'b1: sseg_temp = 7'b0001110;     //f
  2'b10: sseg_temp = 7'b0000011;    //b
  2'b11: sseg_temp = 7'b1000000;    //0
  default: sseg_temp = 7'b0111111; //dash
  endcase
end

assign input1 = input1reg;
assign input2 = input2reg;
assign input4 = input4reg;
assign input3 = input3reg;
assign {g, f, e, d, c, b, a} = sseg_temp; 
assign dp = 1'b1;
assign anSS = anSS_temp;

endmodule
