package com.servisofts.component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import androidx.annotation.NonNull;

    @SuppressWarnings("unused")
    public class Package implements ReactPackage {
        @Override
        public @NonNull List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
            //noinspection ArraysAsListWithZeroOrOneArgument
            return Arrays.<NativeModule>asList(new Module(reactContext));
        }

        @Override
        public @NonNull List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }
    }
