import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import { HashScroll } from "react-hash-scroll";
import SectionHeader from "../sections/partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const Details = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider",
        'z-10',

    );

    const splitClasses = classNames(
        "split-wrap",
        invertMobile && "invert-mobile",
        invertDesktop && "invert-desktop",
        alignTop && "align-top"
    );

    const sectionHeader = {
        title: "",
        paragraph: "",
    };

    return (
        <HashScroll hash="#About" position="start">
            <section {...props} className={outerClasses}>
                <div className="container pt-0 pb-0">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content" />
                        <div className={splitClasses}>
                            <div className="split-item">
                                <div
                                    className="split-item-content center-content-mobile reveal-from-left"
                                    data-reveal-container=".split-item"
                                >
                                    {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                                    <h3 className="mt-0 mb-12">WHAT IS IGNITES?</h3>
                                    <p className="m-0">
                                        Adipisicing duis aute ut fugiat. Elit commodo Lorem laborum labore. Mollit sunt amet ullamco aute ea cillum anim. Ea veniam adipisicing excepteur adipisicing anim. Cupidatat veniam sint dolor nisi velit aliquip eiusmod ut non occaecat. Sunt eiusmod Lorem aute est elit magna ex.
                                    </p>

                                </div>
                                <div
                                    className={classNames(
                                        "split-item-image center-content-mobile reveal-from-bottom",
                                        imageFill && "split-item-image-fill"
                                    )}
                                    data-reveal-container=".split-item"
                                >
                                    <Image
                                        src={require("./../../assets/images/ig-1.jpg")}
                                        alt="Features split 01"
                                        width={528}
                                        height={396}
                                    />
                                </div>
                            </div>

                            {/* <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                    <h3 className="mt-0 mb-12">
                                        WHY IGNITES?
                                    </h3>
                                    <p className="m-0">
                                        Elit laboris in ad nulla fugiat nisi minim. Enim quis Lorem sunt occaecat nulla cillum ullamco nostrud velit culpa esse aliqua dolor. Cillum ut fugiat occaecat esse nisi consectetur magna sint velit occaecat. Voluptate non elit mollit sint elit laborum ut. Consectetur sunt quis ullamco non. Anim est sint aliqua cupidatat in ad.
                                    </p>
                                </div>
                                <div
                                    className={classNames(
                                        "split-item-image center-content-mobile reveal-from-bottom",
                                        imageFill && "split-item-image-fill"
                                    )}
                                    data-reveal-container=".split-item"
                                >
                                    <Image
                                        src={require('./../../assets/images/About.jpeg')}
                                        alt="About"
                                        width={528}
                                        height={396}
                                    />
                                </div>
                            </div> */}

                            <div className="split-item">
                                <div
                                    className="split-item-content center-content-mobile reveal-from-left"
                                    data-reveal-container=".split-item"
                                >
                                    <h3 className="mt-0 mb-12">
                                        OBJECTIVES
                                    </h3>
                                    <div className="m-0">
                                        <ul>
                                            <li>Enim eiusmod ad aliqua culpa cillum dolore veniam ad.</li>
                                            <li>Minim id laborum anim culpa ut aliquip adipisicing veniam velit duis aliqua sint.</li>
                                            <li>Nulla fugiat Lorem aliqua cillum.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        "split-item-image center-content-mobile reveal-from-bottom",
                                        imageFill && "split-item-image-fill"
                                    )}
                                    data-reveal-container=".split-item"
                                >
                                    <Image
                                        src={require("./../../assets/images/ig-2.png")}
                                        alt="Features split 03"
                                        width={528}
                                        height={396}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HashScroll>
    );
};

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;
