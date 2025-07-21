/* Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin. 

    #
    ##
    ###
    ####
    #####
    ######
    #######      */

   const htagArr = Array(7).fill("#");
   let strTag = ""
   for (const tag of htagArr ){

    strTag= strTag + tag;
    console.log(strTag);
   }