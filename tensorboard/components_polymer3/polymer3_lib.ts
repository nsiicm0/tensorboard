/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

// Add dashboards here.
import '../plugins/profile_redirect/polymer3/tf_profile_redirect_dashboard/tf-profile-redirect-dashboard';
import '../plugins/image/polymer3/tf_image_dashboard/tf-image-dashboard';
import '../plugins/text/polymer3/tf_text_dashboard/tf-text-dashboard';

// Exported Polymer <-> Angular interop (to be removed).
import './experimental/plugin_util/plugin-host';
import './tf_backend/tf-backend-polymer';
import './tf_globals/globals-polymer';
import './tf_storage/tf-storage-polymer';
import './tf_paginated_view/tf-paginated-view-store';
