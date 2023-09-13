import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { motion } from "framer-motion";

import "../styles/ContactUs.css";
const ContactUs = () => {
  return (
    <Helmet title="ContactUs">
      <section className="contact">
        <Container>
          <Row>
            <div class="contact">
              <div class="container">
                <div class="main-heading">
                  <h2> نموذج المراسلة</h2>
                </div>
                <div class="content">
                  <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                      className="main-input"
                      type="text"
                      placeholder="الاسم "
                    />
                    <input
                      className="main-input"
                      type="email"
                      placeholder="البريد الالكتروني"
                    />
                    <textarea
                      className="main-input"
                      name="message"
                      placeholder="كتابة الرسالة هنا"
                    ></textarea>
                    <motion.input
                      className="mb-4"
                      type="submit"
                      value="أرسال الرسالة"
                    />
                  </form>
                  <div class="info">
                    <h4>تواصل معنا :</h4>
                    <div className="number-1">
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>
                      <p>544 542 993 963+</p>
                    </div>
                    <div className="number-2">
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>
                      <p>045 263 947 963+</p>
                    </div>

                    <h4>العنوان :</h4>
                    <div className="address">
                      <i className="ri-map-pin-line"></i>
                      <p>سوريا - حلب - الجميلية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ContactUs;
