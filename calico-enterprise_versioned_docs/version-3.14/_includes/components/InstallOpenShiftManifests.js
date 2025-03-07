import React from 'react';

import CodeBlock from '@theme/CodeBlock';

import { prodname, filesUrl } from '../../variables';

export default function InstallOpenShiftManifests() {
  return (
    <>
      <p>Download the {prodname} manifests for OpenShift and add them to the generated manifests directory:</p>
      <CodeBlock language='batch'>
        curl {filesUrl}/manifests/ocp/crds/01-crd-apiserver.yaml -o manifests/01-crd-apiserver.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/01-crd-installation.yaml -o manifests/01-crd-installation.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/01-crd-imageset.yaml -o manifests/01-crd-imageset.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/01-crd-tigerastatus.yaml -o manifests/01-crd-tigerastatus.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_alertexceptions.yaml -o
        manifests/crd.projectcalico.org_alertexceptions.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_bgpconfigurations.yaml -o
        manifests/crd.projectcalico.org_bgpconfigurations.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_bgppeers.yaml -o
        manifests/crd.projectcalico.org_bgppeers.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_blockaffinities.yaml -o
        manifests/crd.projectcalico.org_blockaffinities.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_clusterinformations.yaml -o
        manifests/crd.projectcalico.org_clusterinformations.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_deeppacketinspections.yaml -o
        manifests/crd.projectcalico.org_deeppacketinspections.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_felixconfigurations.yaml -o
        manifests/crd.projectcalico.org_felixconfigurations.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalalerts.yaml -o
        manifests/crd.projectcalico.org_globalalerts.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalalerttemplates.yaml -o
        manifests/crd.projectcalico.org_globalalerttemplates.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalnetworkpolicies.yaml -o
        manifests/crd.projectcalico.org_globalnetworkpolicies.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalnetworksets.yaml -o
        manifests/crd.projectcalico.org_globalnetworksets.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalreports.yaml -o
        manifests/crd.projectcalico.org_globalreports.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalreporttypes.yaml -o
        manifests/crd.projectcalico.org_globalreporttypes.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_globalthreatfeeds.yaml -o
        manifests/crd.projectcalico.org_globalthreatfeeds.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_hostendpoints.yaml -o
        manifests/crd.projectcalico.org_hostendpoints.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_ipamblocks.yaml -o
        manifests/crd.projectcalico.org_ipamblocks.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_ipamconfigs.yaml -o
        manifests/crd.projectcalico.org_ipamconfigs.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_ipamhandles.yaml -o
        manifests/crd.projectcalico.org_ipamhandles.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_ippools.yaml -o
        manifests/crd.projectcalico.org_ippools.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_kubecontrollersconfigurations.yaml -o
        manifests/crd.projectcalico.org_kubecontrollersconfigurations.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_licensekeys.yaml -o
        manifests/crd.projectcalico.org_licensekeys.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_managedclusters.yaml -o
        manifests/crd.projectcalico.org_managedclusters.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_networkpolicies.yaml -o
        manifests/crd.projectcalico.org_networkpolicies.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_networksets.yaml -o
        manifests/crd.projectcalico.org_networksets.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_packetcaptures.yaml -o
        manifests/crd.projectcalico.org_packetcaptures.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_remoteclusterconfigurations.yaml -o
        manifests/crd.projectcalico.org_remoteclusterconfigurations.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_stagedglobalnetworkpolicies.yaml -o
        manifests/crd.projectcalico.org_stagedglobalnetworkpolicies.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_stagedkubernetesnetworkpolicies.yaml -o
        manifests/crd.projectcalico.org_stagedkubernetesnetworkpolicies.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_stagednetworkpolicies.yaml -o
        manifests/crd.projectcalico.org_stagednetworkpolicies.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_tiers.yaml -o
        manifests/crd.projectcalico.org_tiers.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_uisettings.yaml -o
        manifests/crd.projectcalico.org_uisettings.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/crds/calico/kdd/crd.projectcalico.org_uisettingsgroups.yaml -o
        manifests/crd.projectcalico.org_uisettingsgroups.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/00-namespace-tigera-operator.yaml -o
        manifests/00-namespace-tigera-operator.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/02-rolebinding-tigera-operator.yaml -o
        manifests/02-rolebinding-tigera-operator.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/02-role-tigera-operator.yaml -o
        manifests/02-role-tigera-operator.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/02-serviceaccount-tigera-operator.yaml -o
        manifests/02-serviceaccount-tigera-operator.yam{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/02-configmap-calico-resources.yaml -o
        manifests/02-configmap-calico-resources.yaml{'\n'}
        curl {filesUrl}/manifests/ocp/tigera-operator/02-tigera-operator.yaml -o manifests/02-tigera-operator.yaml{'\n'}
      </CodeBlock>
    </>
  );
}
