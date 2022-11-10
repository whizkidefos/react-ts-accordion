import { fireEvent, render, screen } from '@testing-library/react';
import faker from 'faker';

import Accordion from "../components/Accordion";
import AccordionItem from '../components/AccordionItem';

describe('<Accordion />', () => {
    it('should render items', () => {
        const items = [];

        for (let i = 0; i >=3; i++) {
            items.push({
                punchline: faker.lorem.sentence(),
                setup: faker.lorem.sentences(),
            });
        }

        render(<Accordion items={items} />);

        items.forEach(({ punchline, setup }) => {
            const titleEl = screen.queryByText(punchline);
            const contentEl = screen.queryByText(setup);

            expect(titleEl).toBeInTheDocument();
            expect(contentEl).toBeInTheDocument();
        });
    });

    it('should open one at a time', () => {
        const items = [];

        for (let i = 0; i < 3; i++) {
        items.push({
            punchline: faker.lorem.sentence(),
            setup: faker.lorem.sentences(),
        });
        }

        render(<Accordion items={items} />);

        items.forEach(({ punchline }) => {
        const titleEl = screen.queryByText(punchline) as HTMLButtonElement;

        fireEvent.click(titleEl);

        const currentListEl = titleEl.closest('li');
        const activeListEls = document.querySelectorAll('li.active');
        const activeListEl = activeListEls[0];

        expect(activeListEls.length).toBe(1);
        expect(activeListEl).toEqual(currentListEl);
        });
    });

    it('should close if already opened', () => {
        const items = [];

        for (let i = 0; i < 3; i++) {
        items.push({
            punchline: faker.lorem.sentence(),
            setup: faker.lorem.sentences(),
        });
        }

        render(<Accordion items={items} />);

        items.forEach(({ punchline }) => {
        const titleEl = screen.queryByText(punchline) as HTMLButtonElement;

        fireEvent.click(titleEl);
        fireEvent.click(titleEl);

        const currentListEl = titleEl.closest('li');

        expect(currentListEl).not.toHaveClass('active');
        });
    });

    it('should call btnOnClick on title click', () => {
        const btnOnClickMock = jest.fn();

        const punchline = faker.lorem.sentence();
        const setup = faker.lorem.sentences();

        render(
        <AccordionItem
            data={{
            punchline,
            setup,
            }}
            isOpen={faker.datatype.boolean()}
            btnOnClick={btnOnClickMock}
        />
        );

        const titleEl = screen.queryByText(punchline) as HTMLButtonElement;

        fireEvent.click(titleEl);

        expect(btnOnClickMock).toBeCalledTimes(1);
    });
});