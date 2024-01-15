import React from 'react';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
    let navigate = useNavigate()
    let goBackToPreviousPage = (e) => {
        navigate(-1)
    }
    
    return (
        <div>
            <TopBar/>
            <div className='terms-screen'>
                <h1 className='terms'>
                    
                CPAY Terms & Conditions
                 </h1>
                <h5 className='terms'>
                    Welcome to CPAY!
                </h5> 
                <br/>
                <h6>
                    These terms and conditions outline the rules and regulations for the use of The CPAY Website, located at &nbsp;  
                      <a href="https://cpay.mobi">cpay.mobi</a>&nbsp;.
                </h6>
                <br/>
                {/* <br /> */}
                <h6>

                    By accessing this website we assume you accept these terms and conditions. Do not continue to use The CPAY site if you do not agree to take all of the terms and conditions stated on this page.  Terms and Conditions may be changed at anytime. 
                </h6>
                <br />

                <h6>


                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of the United States. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </h6>
                <br />
                <h6 className='bold'>

                    Who May Use the Services?
                </h6>
                <br />
                <h6>

                    <span className='underline'>Eligibility:</span>  You must be permitted to open a bank account to use our Services. You may use the Services only if you can form a binding contract with CPay. You agree to use the Services in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations. Any use or access to the Services by anyone under 21 years of age is strictly prohibited. The Services are not available to any Customers of the Services previously removed from the Services by CPay, or who are otherwise ineligible to use the Services under applicable law. 
                </h6>
                <br />
                <h6>

                    <span className='underline'>Registration and Customer ID:</span> If you want to use certain features of the Services, you’ll have to create an account (“Account”). You can do this via the Site or App. Upon registration, you will create an account by validating your phone number and creating an access code to login to your Account (“Customer ID”). You are the only person authorized to use your Customer ID and access code and for maintaining the confidentiality of your Customer ID and access code. You shall not permit or allow other persons to have access to or use your Customer ID and access code. You are responsible for the use of the Services under your Customer ID. You are responsible for protecting the information on your computer such as by installing anti-virus software, updating your software, password protecting your files, and not permitting third party physical or electronic access to your computer or bank account.
                </h6>
                <br />
                <h6>
                    
                    <span className='underline'>Accuracy of Account Information:</span>  It’s important that you provide us with accurate, complete and up-to-date information for your Account and you agree to update such information to keep it accurate, complete and up-to-date. If you don’t, we might have to suspend or terminate your Account. You agree that you won’t disclose your Account access code to anyone and you’ll notify us immediately of any unauthorized use of your Account. You’re responsible for all activities that occur under your Account, whether or not you know about them.
                </h6>
                <br />
                <h6>
                                        
                    <span className='underline'>
                    Compliance Screening and Inquiries:
                    </span>
                    We may also ask questions and verify information ourselves or through trusted entities we work with for verification and compliance purposes. You agree that we may use the information you provide and other information to verify who you are. This may include looking up available public information and asking other entities, like banks, for information about you. You acknowledge and agree that we may make any inquiries that we consider necessary, either directly or through third parties, concerning your identity and creditworthiness including, without limitation, requiring you to take steps to confirm ownership of your email address, phone number or financial information, or verifying information against third party databases or through other sources.
                </h6>
                <br />
                <h6 className='bold-italic'>Cookies</h6>
                <h6>

                    We employ the use of cookies. By accessing The CPAY site, you agreed to use cookies in agreement with the The CPAY site’s Privacy Policy.
                </h6>
                <br />
                <h6>

                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </h6>
                <h6 className='bold-italic'>
                License
                </h6>
                <br />
                <h6>

                    Unless otherwise stated, The CPAY site and/or its licensors own the intellectual property rights for all material on CPAY’s  website. All intellectual property rights are reserved. You may access this from The CPAY site for your own personal use subjected to restrictions set in these terms and conditions.
                </h6>
                <br />
                <h6>
                    You must not:
                </h6>
                <ul>
                    <li>
                        
                        Republish material from The CPAY site
                    </li>
                    <li>

                        Sell, rent or sub-license material from The CPAY site
                    </li>
                    <li>

                        Reproduce, duplicate or copy material from The CPAY site
                    </li>
                    <li>
                        Redistribute content from The CPAY site
                    </li>
                </ul>
                <br />
                <h6>
                    This Agreement shall begin on the date hereof.
                </h6>
                <br />
                <h6>
                    Parts of the CPAY app or website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website. The CPAY mobile app and/or website do not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of The CPAY site, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, The CPAY app and site shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </h6>
                <br />
                <h6>
                The CPAY site reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </h6>
                <br />
                <h6>
                You warrant and represent that:
                </h6>
                <ul>
                    <li>
                    You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                    </li>
                    <li>
                    The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                    </li>
                    <li>
                    The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy which can be determined solely by CPAY
                    </li>
                    <li>
                    The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                    </li>
                </ul>
                <br />
                <h6>
                You hereby grant The CPAY site a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                </h6>
                <br />
                <h6 className='bold-italic'>
                Hyper linking to our Content
                </h6>
                <br />
                <h6>
                The following organizations may link to our Website without prior written approval:
                </h6>
                <ul>
                    <li>
                    Government agencies;
                    </li>
                    <li>
                    Search engines;
                    </li>
                    <li>
                    News organizations;
                    </li>
                    <li>
                    Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                    </li>
                    <li>
                    System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                    </li>
                </ul>
                <h6>
                These organizations may link to our home page, to publications or to other Website information so long as the link:
                </h6>
                <ol className='alpha-list'>
                    <li>
                    Is not in any way deceptive;
                    </li>
                    <li>
                    Does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and
                    </li>
                    <li>
                    Fits within the context of the linking party’s site.
                    </li>
                </ol>
                <br />
                <h6>
                We may consider and approve other link requests from the following types of organizations:
                </h6>
                <ul>
                    <li>
                    commonly-known consumer and/or business information sources;
                    </li>
                    <li>
                    dot.com community sites;
                    </li>
                    <li>
                    associations or other groups representing charities;
                    </li>
                    <li>
                    online directory distributors;
                    </li>
                    <li>
                    internet portals;
                    </li>
                    <li>
                    accounting, law and consulting firms; and
                    </li>
                    <li>
                    educational institutions and trade associations.
                    </li>
                </ul>
                <br />
                <h6>
                We will approve link requests from these organizations if we decide that:
                </h6>
                <ol className='alpha-list'>
                    <li>
                    The link would not make us look unfavorably to ourselves or to our accredited businesses;
                    </li>
                    <li>
                    The organization does not have any negative records with us;
                    </li>
                    <li>
                    The benefit to us from the visibility of the hyperlink compensates the absence of The CPAY site; and
                    </li>
                    <li>
                    The link is in the context of general resource information.
                    </li>
                </ol>
                <br />
                <h6>
                These organizations may link to our home page so long as the link:
                </h6>
                <ol className='alpha-list'>
                    <li>
                    Is not in any way deceptive;
                    </li>
                    <li>
                    Does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and
                    </li>
                    <li>
                    Fits within the context of the linking party’s site.
                    </li>
                </ol>
                <br />
                <h6>
                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to The CPAY site. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </h6>
                <br />
                <h6>
                Approved organizations may hyperlink to our Website as follows:
                </h6>
                <ul>
                    <li>
                    By use of our corporate name; or
                    </li>
                    <li>
                    By use of the uniform resource locator being linked to; or
                    </li>
                    <li>
                    By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
                    </li>
                </ul>
                <br />
                <h6>
                No use of The CPAY site logo or other artwork will be allowed for linking absent a trademark license agreement.
                </h6>
                <br />
                <h6 className='bold-italic'>
                iFrames
                </h6>
                <br />
                <h6>
                Without prior approval and written permission, you may not create frames around our WebPages that alter in any way the visual presentation or appearance of our Website.
                </h6>
                <br />
                <h6 className='bold-italic'>
                Content Liability
                </h6>
                <br />
                <h6>
                We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </h6>
                <br />
                <h6 className='bold-italic-underline'>
                ACH Credit/Debit Authorization
                </h6>
                <h6 className='bold'>
                By agreeing to these Terms, you authorize CPAY  to electronically debit your designated deposit account at your designated depository financial institution (your “Bank Account” ) via ACH and, if ever applicable, to correct erroneous debits.
                </h6>
                <ul className='bold alpha-list'>
                    <li>
                        <h6 className='bold'>
                        You acknowledge and agree that:
                        </h6>
                        <ol className='alpha-list'>
                            <li>
                            Transactions will go through ACH,
                            </li>
                            <li>
                            All Transactions are governed by ACH rules, and
                            </li>
                            <li>
                                Your ACH transactions will comply with U.S. law. You can learn more about the ACH at <a href="www.nacha.org.">
                                www.nacha.org.
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        By using the Service, you authorize us to initiate electronic withdrawals from your bank account to fund purchases from designated merchants (“Transactions”) through electronic funding methods (“Debits”). Debits will also be initiated to pay for any sales, use or other taxes payable on merchant transactions, and for adjustments to these various amounts. You authorize us to direct your designated financial institution (“Bank Account”) to:
                        <ol className='alpha-list'>
                            <li>
                            Charge each Transaction and/or Debit to Bank Account and
                            </li>
                            <li>
                            Respond to our inquiries regarding Bank Account. You agree that Bank Account is located in the United States, and that all Transactions will be to accounts located in the United States.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Your Agreement and Representations. For purposes of ACH debits and credits, and all electronic payments made or received through the Services, you:
                        <ol className='roman-list'>
                            <li>
                            Authorize CPAY  to initiate and process Debits in accordance with your payment instructions and as provided under these Terms; and
                            </li>
                            <li>
                            Agree to be subject to and comply with this Agreement, the Nacha Rules, and all other applicable laws, rules and regulations.
                            </li>
                        </ol>
                    </li>
                    <li>
                        In addition to any of your other representations and warranties in these Terms, you represent that:
                        <ol className='alpha-list'>
                            <li>
                            Your browser is equipped with at least 128-bit security encryption;
                            </li>
                            <li>
                            You are capable of printing, storing, or otherwise saving a copy of this electronic authorization for your records; and
                            </li>
                            <li>
                            The ACH transactions you hereby authorize comply with applicable law.
                            </li>
                        </ol>
                    </li>
                    <li>
                        [Bank Verification.] Prior to processing any Transaction, we may verify Bank Account information. The verification process may include sending you texts, voice calls, or automated/pre-recorded voice calls. If you provided your mobile phone number to us, you agree we may send such communications to that number. You agree that as part of the verification process we may:
                        <ol className='roman-list'>
                            <li>
                                Verify Bank Account information by debiting between $0.01 and $1.00 from Bank Account, then crediting an amount equal to or more than the same amount back to Bank Account, and requesting you to verify the amount debited and credited, and/or
                            </li>
                            <li>
                            Verify Bank Account using your login credentials to your financial institution and we may also ask you questions pertaining to your bank balance and/ or recent debit transactions. We will only use this verification process to screen for fraud and will not otherwise debit Bank Account, except for your use of Services. You hereby grant us a limited power of attorney to initiate the actions in this Section as part of the bank verification process.
                            </li>
                        </ol>
                    </li>
                    <li>
                        You further authorize us to:
                        <ol className='roman-list'>
                            <li>
                            Initiate transactions with Bank Account to collect Transactions, reinitiate, or initiate a new Debit to Bank Account if any Debit is returned for insufficient funds or uncollected funds,
                            </li>
                            <li>
                            Credit Bank Account when necessary, at our sole discretion, for any refund amount due to you, and/or
                            </li>
                            <li>

                            To send Transactions, electronically or by any other commercially accepted method, to the appropriate financial institution(s). If CPAY tells you that an account number or other information concerning your Transactions has changed, you must use this corrected information in the future to initiate Transactions.
                            </li>
                        </ol>
                    </li>
                    <li>
                        We may:
                        <ol className='roman-list'>

                        <li>
                        Establish security limits on Transactions, such as a maximum number or dollar amount,
                        </li>
                        <li>
                        Change security limits from time to time without disclosing such changes, and
                        </li>
                        <li>
                        Refuse to process your Transactions if we reasonably believe Bank Account balance is insufficient to cover the amounts due or for any other reason we deem reasonable. We may in our sole discretion process any Transactions that have not been settled after these Terms are terminated.
                        </li>
                        </ol>
                    </li>
                    <li>
                    This ACH authorization will remain in full force and effect until we receive your written notification of termination in such time and manner as to afford CPAY a reasonable opportunity to act on your termination notice.
                    </li>
                    <li>
                        If any amount payable by you is dishonored or returned for any reason, such as, but not limited to, non-sufficient funds, account closed, inability to locate account, or reversal by you and/or your bank, CPAY may:
                        <ol className='roman-list'>
                            <li>
                            Reverse any corresponding credit issued to a merchant without liability to us,
                            </li>
                        
                            <li>
                            Reverse a Transaction,
                            </li>
                            <li>
                            Refuse to perform further Services,
                            </li>
                            <li>
                            Initiate another debit in substitution for the dishonored debit until the debit is honored and to initiate separate debits to cover any NSF fee or dishonored Transaction,
                            </li>
                            <li>
                            charge you a one-time insufficient funds penalty fee for each occurrence,
                            </li>
                            <li>
                            report this information to any and all credit agencies and/or financial institutions, and/or
                            </li>
                            <li>
                            immediately terminate this Agreement.
                            </li>
                        </ol>
                    </li>
                </ul>
                <br />
                <h6 className='bold-italic-underline'>
                Transaction History
                </h6>
                <h6 className='bold'>
                    CPAY will maintain a record of your Transaction(s) made using the Services for the previous two (2) years or such time as required by applicable law. You may access and view your Transactions History in the CPAY App or by logging on to your Account via <a href="https://CPAY.com">CPAY.com.
                    </a>
                </h6>
                <br />
                <h5>
                Privacy Policy
                </h5>
                <h6 className='bold-italic'>
                Reservation of Rights
                </h6>
                <h6>
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </h6>
                <br />
                <h6 className='bold-italic'>
                Removal of links from our website
                </h6>
                <br />
                <h6>
                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </h6>
                <br />
                <h6>
                We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </h6>
                <br />
                <h6 className='bold-italic'>
                Disclaimer
                </h6>
                <br />
                <h6>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </h6>
                <ul>

                    <li>
                    limit or exclude our or your liability for death or personal injury;
                    </li>
                    <li>
                    limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                    </li>
                    <li>
                    limit any of our or your liabilities in any way that is not permitted under applicable law; or
                    </li>
                    <li>
                    exclude any of our or your liabilities that may not be excluded under applicable law.
                    </li>
                </ul>
                <h6>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
                </h6>
                <ol className='alpha-list'>
                <li>
                    are subject to the preceding paragraph; and
                </li>
                    <li>
                    govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                    </li>
     
                </ol>
            </div>
            <div className='floating-button'>
                <button onClick={goBackToPreviousPage}><span>Continue</span></button>
            </div>

        </div>
    );
}

export default TermsAndConditions;
