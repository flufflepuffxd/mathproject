
var q = ["<img src='css/image/Addition/Q5/Q5.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Addition/Q2/Q2.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Addition/Q4/Q4.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Addition/Q3/Q3.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Addition/Q1/Q1.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Subtraction/Q5/QS5.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Subtraction/Q2/QS2.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Subtraction/Q4/QS4.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Subtraction/Q3/QS3.png' height='500' width='900' border='5'><br /><br />", 
		"<img src='css/image/Subtraction/Q1/QS1.png' height='500' width='900' border='5'><br /><br />"];
        
		
		
		
		
		var a1 = ["<button class=buttons002 onclick=q1c()><img src='css/image/Addition/Q5/ans1.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q2c()><img src='css/image/Addition/Q2/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q3c()><img src='css/image/Addition/Q4/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q4i()><img src='css/image/Addition/Q3/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q5i()><img src='css/image/Addition/Q1/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q6i()><img src='css/image/Subtraction/Q5/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q7i()><img src='css/image/Subtraction/Q2/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q8i()><img src='css/image/Subtraction/Q4/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q9i()><img src='css/image/Subtraction/Q3/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q10i()><img src='css/image/Subtraction/Q1/ans2.png' height='400' width='400' ></button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()><img src='css/image/Addition/Q5/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q2i()><img src='css/image/Addition/Q2/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q3i()><img src='css/image/Addition/Q4/ans2.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q4c()><img src='css/image/Addition/Q3/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q5c()><img src='css/image/Addition/Q1/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q6c()><img src='css/image/Subtraction/Q5/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q7i()><img src='css/image/Subtraction/Q2/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q8i()><img src='css/image/Subtraction/Q4/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q9i()><img src='css/image/Subtraction/Q3/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q10i()><img src='css/image/Subtraction/Q1/ans3.png' height='400' width='400' ></button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()><img src='css/image/Addition/Q5/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q2i()><img src='css/image/Addition/Q2/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q3i()><img src='css/image/Addition/Q4/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q4i()><img src='css/image/Addition/Q3/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q5i()><img src='css/image/Addition/Q1/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q6i()><img src='css/image/Subtraction/Q5/ans3.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q7c()><img src='css/image/Subtraction/Q2/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q8c()><img src='css/image/Subtraction/Q4/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q9i()><img src='css/image/Subtraction/Q3/ans4.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q10i()><img src='css/image/Subtraction/Q1/ans4.png' height='400' width='400' ></button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()><img src='css/image/Addition/Q5/ans4.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q2i()><img src='css/image/Addition/Q2/ans4.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q3i()><img src='css/image/Addition/Q4/ans4.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q4i()><img src='css/image/Addition/Q3/ans4.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q5i()><img src='css/image/Addition/Q1/ans4.png' height='400' width='400'  ></button>",
                  "<button class=buttons002 onclick=q6i()><img src='css/image/Subtraction/Q5/ans4.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q7i()><img src='css/image/Subtraction/Q2/ans4.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q8i()><img src='css/image/Subtraction/Q4/ans4.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q9c()><img src='css/image/Subtraction/Q3/ans1.png' height='400' width='400' ></button>",
                  "<button class=buttons002 onclick=q10c()><img src='css/image/Subtraction/Q1/ans1.png' height='400' width='400' ></button>"];

        var c = ["Correct</br> 100 Points", "Correct</br> 200 Points", "Correct</br> 300 Points", "Correct</br> 400 Points", "Correct</br> 500 Points", "Correct</br> 600 Points", "Correct</br> 700 Points", "Correct</br> 800 Points", "Correct</br> 900 Points", "Correct</br> 1000 Points"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n++;
        var s = 0;
		
        s++;

        function begin001() {
            disappear001.innerHTML = "";
            message001.innerHTML = "";
            question001.innerHTML = q[0];
            option001.innerHTML = a1[0];
            option002.innerHTML = a2[0];
            option003.innerHTML = a3[0];
            option004.innerHTML = a4[0];
            number001.innerHTML = "<p>" + n++ +"</p>";
        }

        function q1c() {
            answer001.innerHTML = "<div id=green001 >" + c[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q1i() {
            answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
        }

        function new002() {
            question001.innerHTML = q[1];
            option001.innerHTML = a1[1];
            option002.innerHTML = a2[1];
            option003.innerHTML = a3[1];
            option004.innerHTML = a4[1];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q2c() {
            answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q2i() {
            answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
        }

        function new003() {
            question001.innerHTML = q[2];
            option001.innerHTML = a1[2];
            option002.innerHTML = a2[2];
            option003.innerHTML = a3[2];
            option004.innerHTML = a4[2];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q3c() {
            answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q3i() {
            answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
        }

        function new004() {
            question001.innerHTML = q[3];
            option001.innerHTML = a1[3];
            option002.innerHTML = a2[3];
            option003.innerHTML = a3[3];
            option004.innerHTML = a4[3];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q4c() {
            answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
        }

        function new005() {
            question001.innerHTML = q[4];
            option001.innerHTML = a1[4];
            option002.innerHTML = a2[4];
            option003.innerHTML = a3[4];
            option004.innerHTML = a4[4];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q5c() {
            answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q5i() {
            answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
        }

        function new006() {
            question001.innerHTML = q[5];
            option001.innerHTML = a1[5];
            option002.innerHTML = a2[5];
            option003.innerHTML = a3[5];
            option004.innerHTML = a4[5];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q6c() {
            answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q6i() {
            answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
        }

        function new007() {
            question001.innerHTML = q[6];
            option001.innerHTML = a1[6];
            option002.innerHTML = a2[6];
            option003.innerHTML = a3[6];
            option004.innerHTML = a4[6];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q7c() {
            answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q7i() {
            answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
        }

        function new008() {
            question001.innerHTML = q[7];
            option001.innerHTML = a1[7];
            option002.innerHTML = a2[7];
            option003.innerHTML = a3[7];
            option004.innerHTML = a4[7];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q8c() {
            answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q8i() {
            answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
        }

        function new009() {
            question001.innerHTML = q[8];
            option001.innerHTML = a1[8];
            option002.innerHTML = a2[8];
            option003.innerHTML = a3[8];
            option004.innerHTML = a4[8];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q9c() {
            answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q9i() {
            answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
        }

        function new010() {
            question001.innerHTML = q[9];
            option001.innerHTML = a1[9];
            option002.innerHTML = a2[9];
            option003.innerHTML = a3[9];
            option004.innerHTML = a4[9];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML ="<p>"+ n++ +"</p>";
        }

        function q10c() {
            answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
            score001.innerHTML ="<p>"+ s++ +"</p>";
        }

        function q10i() {
            answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
        }

        function end001() {
            message001.innerHTML = "<p>End of Quiz.</p>";
            question001.innerHTML = "";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
            answer001.innerHTML = "";
        }

        function repeat001() {
            location.reload();
        }