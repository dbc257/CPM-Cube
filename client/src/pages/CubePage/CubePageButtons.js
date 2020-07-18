import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as actionCreators from "../../store/creators/actionCreators";
import CsvParse from "./CsvParse";


function CubePage(props) {
    const FB = "FB";
    const AAPL = "AAPL";
    const TSLA = "TSLA";

    const handleClick = (e) => {
        props.onButtonChoice(e);
    };

    return (
        <div className="cube-container">
            <div className="cube-wrapper">
                <div className="cube-title">
                    <h3>The Business Intelligence Cube (BIC)</h3>
                </div>
            </div>
            <div>
                <ButtonGroup>
                    <LinkContainer to="/facebook/charts-fb">
                        <Button onClick={() => handleClick(FB)} variant="success">
                            Facebook 2019-2017
            </Button>
                    </LinkContainer>
                    <LinkContainer to="/apple/charts-aapl">
                        <Button onClick={() => handleClick(AAPL)} variant="warning">
                            Apple, Inc. 2019-2017
            </Button>
                    </LinkContainer>

                    <LinkContainer to="/tesla/charts-tsla">
                        <Button onClick={() => handleClick(TSLA)} variant="danger">
                            Tesla, Inc. 2019-2017
            </Button>
                    </LinkContainer>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <ButtonGroup vertical>
                    <ButtonGroup>
                        <LinkContainer
                            to="/facebook/charts-profit-fb2019"
                            // to="/fb-profit-charts-2019"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="success">
                                Facebook - Profit - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-profit-fb2018"
                            // to="/fb-profit-charts-2019"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="success">
                                Facebook - Profit - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-profit-fb2017"
                            // to="/fb-profit-charts-2018"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="success">
                                Facebook - Profit - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/facebook/charts-expenses-fb2019"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="warning">
                                Facebook - Expenses - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-expenses-fb2018"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="warning">
                                Facebook - Expenses - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-expenses-fb2017"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="warning">
                                Facebook - Expenses - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/facebook/charts-revenue-fb2019"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="danger">
                                Facebook - Revenue - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-revenue-fb2018"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="danger">
                                Facebook - Revenue - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/facebook/charts-revenue-fb2017"
                            onClick={() => handleClick(FB)}
                        >
                            <Button type="button" variant="danger">
                                Facebook - Revenue - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <ButtonGroup vertical>
                    <ButtonGroup>
                        <LinkContainer
                            to="/apple/charts-profit-aapl2019"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="success">
                                Apple, Inc. - Profit - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-profit-aapl2018"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="success">
                                Apple, Inc. - Profit - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-profit-aapl2017"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="success">
                                Apple, Inc. - Profit - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/apple/charts-expenses-aapl2019"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="warning">
                                Apple, Inc. - Expenses - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-expenses-aapl2018"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="warning">
                                Apple, Inc. - Expenses - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-expenses-aapl2017"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="warning">
                                Apple, Inc. - Expenses - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/apple/charts-revenue-aapl2019"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="danger">
                                Apple, Inc. - Revenue - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-revenue-aapl2018"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="danger">
                                Apple, Inc. - Revenue - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/apple/charts-revenue-aapl2017"
                            onClick={() => handleClick(AAPL)}
                        >
                            <Button type="button" variant="danger">
                                Apple, Inc. - Revenue - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <ButtonGroup vertical>
                    <ButtonGroup>
                        <LinkContainer
                            to="/tesla/charts-profit-tsla2019"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="success">
                                Tesla, Inc. - Profit - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-profit-tsla2018"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="success">
                                Tesla, Inc. - Profit - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-profit-tsla2017"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="success">
                                Tesla, Inc. - Profit - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/tesla/charts-expenses-tsla2019"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="warning">
                                Tesla, Inc. - Expenses - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-expenses-tsla2018"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="warning">
                                Tesla, Inc. - Expenses - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-expenses-tsla2017"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="warning">
                                Tesla, Inc. - Expenses - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>

                    <ButtonGroup>
                        <LinkContainer
                            to="/tesla/charts-revenue-tsla2019"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="danger">
                                Tesla, Inc. - Revenue - 2019
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-revenue-tsla2018"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="danger">
                                Tesla, Inc. - Revenue - 2018
              </Button>
                        </LinkContainer>
                        <LinkContainer
                            to="/tesla/charts-revenue-tsla2017"
                            onClick={() => handleClick(TSLA)}
                        >
                            <Button type="button" variant="danger">
                                Tesla, Inc. - Revenue - 2017
              </Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
            <br />
            <div>
                <CsvParse />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonChoice: (chosenOrganization) =>
            dispatch(actionCreators.buttonChosen(chosenOrganization)),
    };
};

export default connect(null, mapDispatchToProps)(CubePage);
