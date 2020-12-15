import React from 'react';
import 'jest-styled-components';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createPortal } from '../../../utils/portal';
import { ModalPopUp, openConfirmAlert } from '../ModalPopUp';

describe('ModalPopUp', () => {
  const openButtonText = 'TEST OPEN MODAL';
  const title = 'TEST MODAL';
  const message = 'TEST MESSAGE CONTENT';
  const okLabel = 'OK';

  const clicks = {
    okButtonClick: jest.fn(),
  };
  const okButtonClickSpy = jest.spyOn(clicks, 'okButtonClick');

  const getPopUpPayload = type => {
    /*
     * Type Values
     * 
     * 0 - basic
     * 1 - without title
     * 2 - custom 
     * 
     */

    // eslint-disable-next-line default-case
    switch (type) {
      case 0: return {
        title,
        message,
        onPrimaryClick: clicks.okButtonClick,
      }
      case 1: return {
        message,
        onPrimaryClick: clicks.okButtonClick,
      }
      case 2: return {
        title: <span>{title}</span>,
        message: <span>{message}</span>,
        renderButton: <button type="button" onClick={clicks.okButtonClick}>
                        {okLabel}
                      </button>,
      }
    }

    return null;
    
  }

  beforeEach(createPortal);
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  /* Snapshot Tests */

  it('Before opening pop-up', () => {
    const { baseElement } = render(<ModalPopUp id="test-modal-pop-up" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Basic', () => {
    const { baseElement, getByText } = render(
      <>
        <ModalPopUp id="test-modal-pop-up" />
        <button
          type="button"
          onClick={() => openConfirmAlert(getPopUpPayload(0))}
        >
          {openButtonText}
        </button>
      </>,
    );

    fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });

  it('Without Title', () => {
    const { baseElement, getByText } = render(
      <>
        <ModalPopUp id="test-modal-pop-up" />
        <button
          type="button"
          onClick={() => openConfirmAlert(getPopUpPayload(1))}
        >
          {openButtonText}
        </button>
      </>,
    );

    fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });

  it('Custom render elements', () => {
    const { baseElement, getByText } = render(
      <>
        <ModalPopUp id="test-modal-pop-up" />
        <button
          type="button"
          onClick={() => openConfirmAlert(getPopUpPayload(2))}
        >
          {openButtonText}
        </button>
      </>,
    );

    fireEvent.click(getByText(openButtonText));

    expect(baseElement).toMatchSnapshot();
  });

  /* Unit Test Cases */

  it('Basic - OK Click', () => {
    const { getByText } = render(
      <>
        <ModalPopUp id="test-modal-pop-up" />
        <button
          type="button"
          onClick={() => openConfirmAlert(getPopUpPayload(0))}
        >
          {openButtonText}
        </button>
      </>,
    );

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(okLabel));

    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });

  it('Custom elements - OK Click', () => {
    const { getByText } = render(
      <>
        <ModalPopUp id="test-modal-pop-up" />
        <button
          type="button"
          onClick={() => openConfirmAlert(getPopUpPayload(0))}
        >
          {openButtonText}
        </button>
      </>,
    );

    fireEvent.click(getByText(openButtonText));
    fireEvent.click(getByText(okLabel));

    expect(okButtonClickSpy).toHaveBeenCalledTimes(1);
  });

});
