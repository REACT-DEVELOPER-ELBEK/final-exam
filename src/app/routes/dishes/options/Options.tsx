"use client";
import React from "react";
import "./Options.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Options() {
  return (
    <div className="options">
      <div className="options__title">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
      </div>
      <div className="options__items">
        <Accordion allowMultipleExpanded style={{marginTop: "114px"}}>
          <AccordionItem style={{ borderTop: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  background: "transparent",
                  color: "#323142",
                  fontSize: "23.417px",
                  fontWeight: 600,
                  lineHeight: "59.24px",
                }}
              >
                How long does delivery take?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion__pararaph">
                You Can Get Information By Contacting Our Support Team Have 24/7
                Service.What’s The Difference Between Free And Paid Plan ?
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{
                  background: "transparent",
                  color: "#323142",
                  fontSize: "23.417px",
                  fontWeight: 600,
                  lineHeight: "59.24px",
                }}>
                How Does It Work ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion__pararaph">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{
                  background: "transparent",
                  color: "#323142",
                  fontSize: "23.417px",
                  fontWeight: 600,
                  lineHeight: "59.24px",
                }}>
                How does your food delivery service work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion__pararaph">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{
                  background: "transparent",
                  color: "#323142",
                  fontSize: "23.417px",
                  fontWeight: 600,
                  lineHeight: "59.24px",
                }}>
                What payment options do you accept?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion__pararaph">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{
                  background: "transparent",
                  color: "#323142",
                  fontSize: "23.417px",
                  fontWeight: 600,
                  lineHeight: "59.24px",
                }}>
                Do you offer discounts or promotions?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion__pararaph">
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Options;
