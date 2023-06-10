package com.servisofts.component;

import android.app.Activity;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Toast;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class Module extends ReactContextBaseJavaModule {
    public Module(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ServisoftsComponent";
    }

    @ReactMethod
    public void test(Promise cb) {
        cb.resolve(true);
    }

    @ReactMethod
    public void setSoftInputMode(final String message, final Promise cb) {
        final Activity activity = getCurrentActivity();
        if (activity == null) {
            cb.reject("getCurrentActivity is null");
            return;
        }
        try {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    // Get the current window
                    final Window window = activity.getWindow();
                    int softInputMode = WindowManager.LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED;
                    String[] params = message.split("\\|"); // Escapar el carácter "|" con "\\"
                    for (String option : params) {
                        switch (option.trim()) {
                            case "adjustResize":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE;
                                break;
                            case "adjustPan":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN;
                                break;
                            case "adjustNothing":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING;
                                break;
                            case "stateHidden":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN;
                                break;
                            case "stateAlwaysHidden":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN;
                                break;
                            case "stateVisible":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE;
                                break;
                            case "stateAlwaysVisible":
                                softInputMode |= WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE;
                                break;
                            default:
                                break;
                        }
                    }
                    window.setSoftInputMode(softInputMode);
                    cb.resolve(true);
                }
            });
        } catch (Exception e) {
            cb.reject("error desconocido");
        }

    }
}
