let footer = () => {
    return `
    <div id="box1">
    <div id="list">
        <div>
            <ul type="none">
                <li>
                    <h4>Help and Information</h4>
                </li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/about-us">About</a></li>
                <li><a href="https://www.theoutnet.com/en-in/editorial/affiliates">Affiliates</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/careers">Careers</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/contact-us">Contact Us</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help">Help</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/privacy-policy">Privacy Policy</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/general-terms-and-conditions-of-sale">Terms and Condition</a></li>
                <li><a href="https://www.theoutnet.com/en-in/editorial/our-considered-pledge">Our Considered pledge</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/customer-service/payment-and-site-security">Payment</a></li>
            </ul>
        </div>

        <div style="margin-top: 65px;">
            <ul type="none">

                <li><a href="https://www.theoutnet.com/en-in/page/help/delivery">Delivery</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/customer-service/returns">Returns</a></li>
                <li><a href="https://www.theoutnet.com/en-in/account/track-order">Track your Order</a></li>
                <li><a href="https://www.theoutnet.com/en-in/account/create-return">Create a Return</a></li>
                <li><a href="https://www.theoutnet.com/en-in/account/track-return">Track your Return</a></li>
                <li><a href="https://www.theoutnet.com/en-in/page/help/cookie-policy">Cookie Policy</a></li>
                <li><a href="">Cookie Center</a></li>
                <li><a href="https://theoutnet.reflaunt.com/">Our Presale Service</a></li>
            </ul>
        </div>
    </div>

    <div id="payment">
        <img src="data:image/png;base64,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"
            alt="">
        <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt="">
        <img src="data:image/png;base64,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"
            alt="">
    </div>

</div>

<!-- box1 end here-->

<div id="box2">
    <div id="input">
        <h2>Want to stay stylishly in the know?</h2>
        <p>Sign up today for email exclusives including early access to Sale, the latest trends
            and arrivals from your favorite designers and can’t miss promotions.</p>
        <form>
            <input type="text" name="" id="email" placeholder="Enter your Email Address">
            <input type="submit" name="" id="submit" value="Subscribe">
        </form>
    </div>
    <h4>24/7 Customer Care</h4>
    <p><i class="fa-solid fa-phone"></i><span> +44 330 022 4250</span></p>
    <p><i class="fa-solid fa-envelope"></i><span> customercare@theoutnet.com</span></p>

    <h4 class="socialapp">Stay social</h4>
    <div id="icon"><i class="fa-brands fa-facebook-f symbol" ></i><i class="fa-brands fa-twitter symbol"></i><i
            class="fa-brands fa-pinterest-p symbol"></i><i class="fa-brands fa-youtube-square symbol"></i><i
            class="fa-brands fa-instagram symbol"></i></div>
</div>
<!-- Footer end -->
`
};

let footerPart2=()=>{
    return`
 
<div id="hello1">
    <h4>NET-A-PORTER</h4>
    <h4>MR PORTER</h4>
</div>
<div id="hello2">
    <P id="nano">© 2009 - 2022 THE OUTNET , part of YOOX NET-A-PORTER GROUP.</P>
    <P>The individuals featured on this site do not endorse THE OUTNET or the products shown.</P>
</div>
`
}
export { footer,footerPart2 };