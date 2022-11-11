import { createGlobalStyle } from "styled-components";

const AccordionList = createGlobalStyle`
    .accordion-item {
        border: 1px solid #005052;
    }

    .accordion-item:not(:first-of-type) {
        border-top: 0;
    }

    .accordion-item-title {
        width: 100%;
        margin: 0;
    }

    .accordion-item-btn {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #ffffff;
        color: #005052;
        border: 0;
        padding: 15px 20px;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
        user-select: none;
    }

    .accordion-item-btn::after {
        content: '';
        flex-shrink: 0;
        width: 18px;
        height: 18px;
        margin-left: auto;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: 18px;
        transition: transform 0.2s ease-in-out;
    }

    .accordion-item.active .accordion-item-btn::after {
        transform: rotate(-180deg);
    }

    .accordion-item.active .accordion-item-title .accordion-item-btn {
        background: #4fb08b27;
    }

    .accordion-item-container {
        transition: height 0.2s ease-in-out;
        overflow: hidden;
    }

    .accordion-item-content {
        border-top: 1px solid #cccccc;
        padding: 15px 20px;
    }
`

export default AccordionList;