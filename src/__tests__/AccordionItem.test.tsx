import { fireEvent, render, screen } from '@testing-library/react';
import faker from 'faker';
import * as hooks from '../lib/hooks';
import AccordionItem from '../components/AccordionItem';

describe('<AccordionItem />', () => {
  
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render content', () => {
    const punchline = faker.lorem.sentence();
    const setup = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ punchline, setup }}
        isOpen={faker.datatype.boolean()}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(punchline);
    const contentEl = screen.queryByText(setup);

    expect(titleEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });

  it('should not display content if isOpen is false', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 });

    jest
      .spyOn(hooks, 'getRefValue')
      .mockReturnValue({ scrollHeight: contentScrollHeight });

    const punchline = faker.lorem.sentence();
    const setup = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ punchline, setup }}
        isOpen={false}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(punchline);
    const listEl = titleEl?.closest('li');
    const contentEl = screen.queryByText(setup);
    const contentContainerEl = contentEl?.parentElement;

    expect(listEl).not.toHaveClass('active');
    expect(contentContainerEl).toHaveStyle({ height: '0px' });
  });

  it('should display content if isOpen is true', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 });

    jest
      .spyOn(hooks, 'getRefValue')
      .mockReturnValue({ scrollHeight: contentScrollHeight });

    const punchline = faker.lorem.sentence();
    const setup = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ punchline, setup }}
        isOpen={true}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(punchline);
    const listEl = titleEl?.closest('li');
    const contentEl = screen.queryByText(setup);
    const contentContainerEl = contentEl?.parentElement;

    expect(listEl).toHaveClass('active');
    expect(contentContainerEl).toHaveStyle({
      height: `${contentScrollHeight}px`,
    });
  });

  it('should call btnOnClick on title click', () => {
    const btnOnClickMock = jest.fn();

    const punchline = faker.lorem.sentence();
    const setup = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ punchline, setup }}
        isOpen={faker.datatype.boolean()}
        btnOnClick={btnOnClickMock}
      />
    );

    const titleEl = screen.queryByText(punchline) as HTMLButtonElement;

    fireEvent.click(titleEl);

    expect(btnOnClickMock).toBeCalledTimes(1);
  });
});