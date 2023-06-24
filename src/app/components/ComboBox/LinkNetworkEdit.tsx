
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChangeEvent, FC } from 'react';
import { SocialNetworks } from '@/app/constants/constants';
import { Input } from '@mui/material';
import { LinkNetworkEditProps, Network, SocialNetworkType } from '@/app/types/types';



export const LinkNetworkEdit: FC<LinkNetworkEditProps> = ({ typeLink, disabled, setDataLink, currentNetworks, isEdit }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setDataLink({ application: parseInt(event.target.value), url: typeLink.url, username: typeLink.username })
    };

    const HandleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setDataLink({ application: typeLink.application, url: event.target.value, username: typeLink.username })

    }

    const HandleChangeInputUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setDataLink({ application: typeLink.application, url: typeLink.url, username: event.target.value })

    }


    function SelectAvailableNetwork(array1: SocialNetworkType[], array2: Network[0][]): SocialNetworkType[] {
        let avtiveAplications: number[]

        if (isEdit) {
            avtiveAplications = array2
                .filter((element) => element.application !== typeLink.application)
                .map((element) => element.application);
        } else {
            avtiveAplications = array2.map((element) => element.application)
        }

        const newArray = array1.filter((element) => !avtiveAplications.includes(element.value))

        return newArray
    }

    const availableNetwork = SelectAvailableNetwork(SocialNetworks, currentNetworks)


    return (
        <>
            <FormControl variant="standard" sx={{
                m: 0, minWidth: 120, flexBasis: '50'
            }}>
                <InputLabel id="demo-simple-select-standard-label" sx={{
                    color: 'white',
                    "&.Mui-focused": {
                        color: "var(--buttonColor)",
                    },

                }}>Aplicación</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={typeLink.application.toString()}
                    onChange={handleChange}
                    label="Aplicación" disabled={disabled}
                    MenuProps={{
                        sx: {
                            "& .Mui-selected": {
                                backgroundColor: "var(--buttonColor)",
                                color: 'var(--fontColor)',

                            },

                            "& .MuiPaper-root": {
                                backgroundColor: "var(--primaryColor)",
                                color: 'var(--fontColor)',
                                overflowY: 'auto',
                                scrollbarColor: '#888',
                                "::-webkit-scrollbar": {
                                    width: '6px' /* Ancho de la scrollbar */
                                },

                                "::-webkit-scrollbar-thumb": {
                                    backgroundColor: 'var(--terciaryColor)'
                                },
                                "::-webkit-scrollbar-track": {
                                    backgroundColor: 'transparent' /* Color de la pista */
                                }
                            },
                            "& .MuiMenuItem-root:hover": {
                                backgroundColor: "var(--terciaryColor)",
                                color: 'var(--fontColor)'
                            },
                            "& .MuiMenuItem-root": {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5em',


                            }
                        }
                    }}
                    sx={{
                        backgroundColor: "#DFDFDF12",
                        color: 'var(--fontColor)',
                        padding: "0em 0.8em",
                        "& .MuiInput-input": {
                            color: "var(--fontColor)",
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5em',

                        },
                        "& .MuiSelect-select.MuiInputBase-input.MuiInput-input.Mui-disabled": {
                            WebkitTextFillColor: "#BCBCBC",
                            "& .Mui-disabled": {
                                WebkitTextFillColor: "#BCBCBC",
                            },
                        },
                        "& .MuiSvgIcon-root": {
                            color: "var(--buttonColor)",
                        },
                        "&:after": {
                            borderBottomColor: "var(--buttonColor)",
                        },
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {disabled && SocialNetworks.map(network => (
                        <MenuItem key={crypto.randomUUID()} value={network.value}>{network.logo}{network.name}</MenuItem>
                    ))}
                    {!disabled && availableNetwork.map(network => (
                        <MenuItem key={crypto.randomUUID()} value={network.value}>{network.logo}{network.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ flexBasis: '50' }}>
                <Input
                    value={typeLink.url}
                    onChange={HandleChangeInput}
                    placeholder={SocialNetworks.find(network => network.value === typeLink.application)?.urlHolder}
                    disabled={disabled}
                    sx={{
                        backgroundColor: '#DFDFDF12',
                        color: 'var(--fontColor)',
                        padding: "0em 1em",
                        fontSize: '0.9em',
                        "&:after": {
                            borderBottomColor: "var(--buttonColor)",
                        },
                        "& .Mui-disabled": {
                            WebkitTextFillColor: "#BCBCBC",
                        },
                    }} />
            </FormControl>
            <FormControl>
                <Input
                    value={typeLink.username}
                    onChange={HandleChangeInputUsername}
                    placeholder={'username'}
                    disabled={disabled}
                    sx={{
                        backgroundColor: '#DFDFDF12',
                        color: 'var(--fontColor)',
                        padding: "0em 1em",
                        fontSize: '0.9em',
                        "&:after": {
                            borderBottomColor: "var(--buttonColor)",
                        },
                        "& .Mui-disabled": {
                            WebkitTextFillColor: "#BCBCBC",
                        },
                    }} />
            </FormControl>
        </ >
    );
}

export default LinkNetworkEdit;