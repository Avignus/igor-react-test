import { ChangeEvent, useEffect, useState } from "react";
import { useTheme } from "src/context/ThemeProvider";
import { Label, Input, Switch } from "./styles";
import moon from "src/assets/crescent-moon.png";
import sun from "src/assets/sun.png";
const ToggleSwitch = () => {
    const [checked, setChecked] = useState(true);
    const { setTheme } = useTheme();
    useEffect(() => {
        if (setTheme) {
            if (checked) setTheme("dark");
            else setTheme("light");
        }
    }, [checked]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <div style={{ backgroundColor: "transparent" }}>
                <img
                    style={{ width: "30px", height: "30px", paddingTop: "5px" }}
                    src={sun}
                    alt=""
                />
            </div>
            <Label>
                <Input
                    checked={checked}
                    type="checkbox"
                    onChange={handleChange}
                />
                <Switch />
            </Label>
            <div style={{ backgroundColor: "transparent" }}>
                <img
                    style={{
                        width: "20px",
                        height: "20px",
                        paddingTop: "9px",
                        marginLeft: "-35px",
                    }}
                    src={moon}
                    alt=""
                />
            </div>
        </>
    );
};

export default ToggleSwitch;
