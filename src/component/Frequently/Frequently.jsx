import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Navbar from '../navbar/Navbar';
import Header from '../Header/Header';
const Frequently = () => {
  return (
    <>
   




    <div class="faq-section position-relative pt-110 pb-110">
    <div class="linear-right"></div>
    <div class="container">
        <div class="row align-items-start gy-5">
            <div class="col-xl-5 text-start pe-lg-5">
                <div class="section-title mb-60">
                    <h2>Frequently Asked Questions</h2>
                    <p>Your Queries Answered: Unveiling the Essentials of Crypto Trading and Investment with FinFunder</p>
                </div>
                <a href="" class="i-btn btn--primary btn--lg capsuled">More Questions ?</a>
                <div class="bet-vecotr style-two">
                    <img src="default/images/385x278.jpg" alt="Vector image"/>
                </div>
            </div>
            <div class="col-xl-7">
                <div class="faq-wrap style-border">
                <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="How it works?">
        The bot, according to the specified parameters and based on AI, automatically opens transactions on the futures market in the BTC/USDT pair, sets entry points and exit points. The bot uses the trading balance of all users in small parts. This minimizes risks and allows you to always be in profit both on the long and at a short distance
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle=" Mathematics of earnings">
        The bot brings an average of 0.75 - 1% per day  from the deposit. However do not forget about our commission.  For example: Your deposit 1000 USDT When replenishing, our commission will be 15%, which means that your balance will be credited 850  USDT 1 day  - 856USDT 2 day  - 863USDT 3 day  - 870USDT 4 day  - 877USDT 5 day  - 884USDT 6 day  - 891USDT 7 day  - 898USDT 8 day  - 905USDT 9 day  - 912USDT 10 day - 919USDT 11 day - 926 USDT 12 day - 933USDT   933 USDT will be available for withdrawal. The commission is 5%, 887 USDT will be credited to your balance, taking into account all commissions.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="What is the commission?">
          We do not charge a commission for each completed transaction in the bot, but we charge 15% of the deposit amount and 6% of the withdrawal amount
        </MDBAccordionItem>

        <MDBAccordionItem collapseId={4} headerTitle=" Minimum deposit?">
        The minimum deposit amount is 25 USDT, this amount is enough to check the performance of the bot. The recommended amount is from 500 USDT
        </MDBAccordionItem>

        <MDBAccordionItem collapseId={5} headerTitle=" Bot Trading Exchange?">
        The bot trades on the most reliable such as Binance exchanges.
        </MDBAccordionItem>

        <MDBAccordionItem collapseId={6} headerTitle="  Available transactions?">
        The bot works on the futures market, without trading leverage. At the moment, only in the USDT/BTC pair
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
                                  
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Frequently
