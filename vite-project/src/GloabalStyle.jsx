import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

.spinner {
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  background: #6176F7;

  h1 {
    color: white;
    font-size: 5vw; /* Use vw (viewport width) for font size */
    display: flex;
    margin: auto;
    align-items: center;
    animation: showup 7s infinite;

    & > span {
      color: #FFC27A;
      margin: 1.5vw; /* Use vw for margin */
      display: inline-block;
      opacity: 0;
      transform: translateY(50%);
      animation: slideIn 4s forwards;
    }
  }

  .spinner div:last-of-type {
    width: 0;
    animation: reveal 7s infinite;
  }

  .spinner div:last-of-type span {
    margin-left: -20vw; /* Use vw for margin */
    animation: slidein 7s infinite;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 8vw;
    }

    .spinner div:last-of-type span {
      margin-left: -10vw;
    }
  }

  
@keyframes showup {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes slidein {
  0% { margin-left: -50vw; }
  20% { margin-left: -50vw; }
  35% { margin-left: 0; }
  100% { margin-left: 0; }
}

@keyframes reveal {
  0% { opacity: 0; width: 0; }
  20% { opacity: 1; width: 0; }
  30% { width: 20vw; }
  80% { opacity: 1; }
  100% { opacity: 0; width: 20vw; }
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateY(50%); }
  100% { opacity: 1; transform: translateY(0); }
}

    }

    .ladning-page{
            padding: 10px 80px;
            background: #6176F7;
            height: 85vh;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 80px;

            .landing-header{
                display: flex;
                align-items: center;
                justify-content: space-between;

                &>:nth-child(1){
                    font-size: 25px;
                    font-style: italic; 
                    color: #FFC27A;

                    &>span{
                        font-size: 30px;
                        color: white;
                    }
                }
                
                &>:nth-child(2){
                    display: flex;
                    align-items: center;
                    gap: 50px;
                    text-transform: capitalize;
                }
                &>:nth-child(3){
                    position: absolute;
                }
                .landing-nav>button{
                    padding: 5px;
                    color: white;
                    border-radius: 23px;
                    background: linear-gradient(0deg, rgba(255,163,55,1) 0%, rgba(255,194,122,1) 100%);
                    width: 100px;
                    outline: none;
                    border: none;
                }
            }

            .landing-content{
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                justify-content: center;

                .landing-about{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h3{
                        color: #FFC27A;
                    }

                    h1{
                        font-size: 34px;
                    }
                    p{
                        color: #ffffff85;
                    }

                    .search-bar{
                        display: flex;
                        align-items: center;

                        &>input{
                            color: #FFA337;
                            width: 60%;
                            outline: none;
                            border: none;
                            padding: 5px 10px;
                            border-radius: 50px;
                        }

                        .mic{
                            position: relative;
                            left: -68px;
                            padding: 8px;
                            cursor: pointer;
                            
                        }
                        .search{
                            position: relative;
                            left: -66px;
                            background:linear-gradient(#FFC27A, #FFA337);
                            padding: 8.5px;
                            border-radius: 50%;
                            cursor: pointer;
                        }
                    }
                }

                .landing-image{
                    
                    &>img{
                        height: 300px;
                        position: relative;
                        transform: translate(45%, -15%);
                        text-align: center;

                    }
                }
            }
    }

    .number-counts{
        height: 15vh;
        background: #F1F2F8;
        display: flex;
        align-items: center;
        padding: 0px 80px;
        justify-content: space-between;
        gap: 20px;

        &>div{
            display: flex;
            align-items: center;
            gap: 10px;

            &>div>span{
                font-size: 18px;
                font-weight: 600;
            }
        }

        &>:nth-child(1)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #2AF9B1 0%, #20B486 100%);
                color: white;
        }

        &>:nth-child(2)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #A988F9 0%, #6D3AE9 100%);
                color: white;
        }

        &>:nth-child(3)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #FFA4AF 0%, #EE455A 100%);
                color: white;
        }

        &>:nth-child(4)>:nth-child(1){
                padding: 10px;
                border-radius: 30px;
                background: linear-gradient(180deg, #92DAF0 0%, #21C9FF 100%);
                color: white;
        }
    }

`;
