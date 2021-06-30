import React, { Component } from 'react';
import { EmptyState, Layout, Page, Card, Stack, Heading, Badge, Banner, Icon, Button, VideoThumbnail, MediaCard, TextStyle, ProgressBar, Select, TextField, ButtonGroup, DisplayText, FormLayout, DatePicker, Checkbox, Collapsible, TextContainer, RadioButton, Modal } from '@shopify/polaris';
import AppFooter from './appfooter';
import AppNavigation from './appnavigation';
import AddBundleNav from './add-bundle-nav';
import AddBundleLeftSection from './add-bundle-left-section';
import Link from 'next/link';

class AddBundleStepFour extends Component {
    state = {
        value: 'disabled',
        disabled: true,
        showModal: false
    }

    handleRadioChange = (e, v) => {
        console.log(e)
        console.log(v)
        if(v === 'bundle_visible') {
            this.setState({ showModal: true })
        } else {
            this.setState({ showModal: false })
        }
    }


    render() {

        const { showModal } = this.state;

        return (
            <React.Fragment>
                <AppNavigation />

                <Page>

                    <AddBundleNav />

                    <Layout>
                        <Layout.Section oneHalf>
                            <AddBundleLeftSection />
                        </Layout.Section>


                        <Layout.Section oneHalf>
                            <Stack wrap={false} distribution="fill" spacing="extraTight">
                                <span>
                                    <ProgressBar progress={100} size="small" />
                                    <TextStyle variation="positive">Create bundle</TextStyle>
                                </span>

                                <span>
                                    <ProgressBar progress={100} size="small" />
                                    <TextStyle variation="positive">Choose products</TextStyle>
                                </span>

                                <span>
                                    <ProgressBar progress={100} size="small" />
                                    <TextStyle variation="positive">Build offer &nbsp;   &nbsp;  &nbsp; </TextStyle>
                                </span>

                                <span>
                                    <ProgressBar progress={100} size="small" />
                                    <TextStyle variation="positive">Customize & Launch</TextStyle>
                                </span>
                            </Stack>


                            <div className="mt_2 text_center">
                                <Card sectioned>
                                    <Stack vertical>
                                        <p className="py_2">
                                            <DisplayText size="small">Visit the product page to ensure the bundle is displayed on the page</DisplayText>
                                            <TextContainer>
                                                <p className="pt_2">Use the preview on the left to confirm it is displayed accounting to your settings</p>
                                                     <Button primary>Go to Product Page <i className="fa fa-external-link" aria-hidden="true"></i></Button>
                                                
                                            </TextContainer>

                                            <TextStyle variation="subdued"><p className="my_2"> The Go to product page button above opens a new tab and once that is confirmed the button below starts to animate to click Confirm and Launch - after clicking next a frop down appears like bellow </p></TextStyle>

                                            <Button primary>Confirm & Launch </Button>

                                        </p>
                                    </Stack>

                                </Card>
                            </div>

                            <div className="mt_2 ">
                                <Card sectioned>
                                    <Stack vertical>
                                        <p className="py_2">
                                            <DisplayText size="small">Result</DisplayText>
                                            <RadioButton
                                                label={<TextStyle variation="positive">
                                                😃 I've completed above steps and I can see the bundle</TextStyle>}
                                                value='disabled'
                                                // checked={value === 'disabled'}
                                                // id="disabled"
                                                name="bundle_v"
                                                onChange={(e) => this.handleRadioChange(e, 'bundle_visible')}
                                            />

                                            <RadioButton
                                                label={<p>😌 I've completed above steps and I still can't see the bundle</p>}
                                                // value='disabled'
                                                // checked={value === 'disabled'}
                                                // id="disabled"
                                                name="bundle_v"
                                                onChange={(e) => this.handleRadioChange(e, 'bundle_not_visible')}
                                            />
                                        </p>
                                    </Stack>
                                </Card>
                            </div>

                            <div style={{ height: '500px' }}>
                                <Modal
                                    // activator={<Button >Open</Button>}
                                    open={showModal}
                                    onClose={() => this.setState({ showModal: !this.state.showModal })}
                                    title="Please Leave a quick review :)"
                                    primaryAction={{
                                        content: "Sure!",
                                        // onAction: handleChange,
                                    }}
                                    secondaryActions={[
                                        {
                                            content: "No I'm having issues",
                                            // onAction: handleChange,
                                        },
                                    ]}
                                >
                                    <Modal.Section>
                                        <TextContainer>
                                            <p>
                                                Awesome, you are all set up. Fancy leaving a quich 10 sec review if you like the app? If you are having issues then please contact us directly istead. 
                                            </p>
                                        </TextContainer>
                                    </Modal.Section>
                                </Modal>
                            </div>


                        </Layout.Section>
                    </Layout>

                </Page>

                <AppFooter />
            </React.Fragment>
        );
    }
}

export default AddBundleStepFour;